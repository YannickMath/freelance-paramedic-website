import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import CookieConsent from "../components/CookieConsent";
import "../styles/globals.css";
import Script from "next/script";


export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScreenSize = () => {
    const mediaQuery = window.matchMedia(
      "(max-width: 768px) and (orientation: portrait)"
    );
    setIsSmallScreen(mediaQuery.matches);
  };

  useEffect(() => {
    updateScreenSize(); // Call the function once to set the initial value
    window.addEventListener("resize", updateScreenSize); // Listen for window resize events

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  //Google analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const GtagScript = () => (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Set default consent to denied
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });

            // Check if user has already consented
            const consent = localStorage.getItem('cookieConsent');
            if (consent === 'accepted') {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            }
          `,
        }}
      />
    </>
  );

  return (
    <Layout isSmallScreen={isSmallScreen}>
      <Component
        {...pageProps}
        key={router.route}
        isSmallScreen={isSmallScreen}
      />
      <GtagScript />
      <CookieConsent />
    </Layout>
  );
}
