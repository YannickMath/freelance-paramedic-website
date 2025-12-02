import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);

    // Enable Google Analytics if GA ID is configured
    if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);

    // Disable Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 shadow-lg z-50 border-t-4 border-green-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">🍪 Respect de votre vie privée</h3>
          <p className="text-sm text-gray-300">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic.
            En cliquant sur "Accepter", vous consentez à l'utilisation de ces cookies conformément à notre politique de confidentialité.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Refuser
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
