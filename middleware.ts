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

    const response = NextResponse.rewrite(rewriteUrl);
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

  // Detect country from Vercel geo headers (works on Vercel; undefined locally)
  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry"); // Cloudflare fallback

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
