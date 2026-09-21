import { NextRequest, NextResponse } from "next/server";

const GEO_LOCALES: Record<string, string> = {
  CA: "ca",
  AE: "ae",
  US: "us",
  GB: "gb",
  AU: "au",
  IN: "in",
  SG: "sg",
  DE: "de",
  FR: "fr",
  SA: "sa",
};

const SUPPORTED_LOCALES = Object.values(GEO_LOCALES);
const LOCALE_COOKIE = "up_locale";

/** Read the visitor's ISO country code from whichever header the host provides. */
function detectCountry(request: NextRequest): string | null {
  // Netlify: base64 JSON, e.g. { "country": { "code": "IN", "name": "India" } }
  const nfGeo = request.headers.get("x-nf-geo");
  if (nfGeo) {
    try {
      const decoded = JSON.parse(
        typeof atob === "function"
          ? atob(nfGeo)
          : Buffer.from(nfGeo, "base64").toString("utf8")
      );
      const code = decoded?.country?.code;
      if (typeof code === "string" && code.length === 2) return code;
    } catch {
      // Malformed header must never take the site down — fall through.
    }
  }

  return (
    request.headers.get("x-vercel-ip-country") ??   // Vercel
    request.headers.get("cf-ipcountry") ??          // Cloudflare
    request.headers.get("x-country") ??             // some proxies
    null
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the path already starts with a supported locale
  const pathLocale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (pathLocale) {
    // Rewrite /{locale}/... → /... internally so the same pages are served
    const rewritePath = pathname.replace(`/${pathLocale}`, "") || "/";
    const rewriteUrl = new URL(rewritePath, request.url);
    rewriteUrl.search = request.nextUrl.search;

    // Forward the locale so server components can price in the right currency.
    // The rewrite hides the prefix from the app, so without this the page has
    // no way to know which market it is rendering for.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", pathLocale);

    const response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    // Remember this locale in a cookie
    response.cookies.set(LOCALE_COOKIE, pathLocale, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Don't redirect if the user already has a locale cookie (they chose their region)
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return NextResponse.next();
  }

  // Detect country. This site is hosted on Netlify, which sets NEITHER of the
  // Vercel/Cloudflare headers — it sends `x-nf-geo`, a base64-encoded JSON blob
  // shaped { country: { code, name }, ... }. Reading only the Vercel header is
  // why geo detection silently did nothing in production. Netlify is checked
  // first; the others stay as fallbacks so this keeps working if the host changes.
  const country = detectCountry(request);

  const detectedLocale = country ? GEO_LOCALES[country.toUpperCase()] : null;

  if (detectedLocale) {
    const redirectUrl = new URL(
      `/${detectedLocale}${pathname === "/" ? "" : pathname}`,
      request.url
    );
    redirectUrl.search = request.nextUrl.search;
    return NextResponse.redirect(redirectUrl, { status: 302 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)",
  ],
};
