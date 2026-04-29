"use client";

import { useEffect, useState } from "react";

export function useCountryFromIP(): string | null {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code) setCountryCode(data.country_code as string);
      })
      .catch(() => {});
  }, []);

  return countryCode;
}
