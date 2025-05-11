import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface CookieBannerProps {
  className?: string;
}

const CookieBanner = ({ className = "" }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // If no choice has been made, show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6 ${className}`}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h3 className="text-lg font-medium mb-2">Cookie Notice</h3>
          <p className="text-sm text-gray-600">
            This website uses cookies to enhance your browsing experience and to
            process form submissions. By clicking "Accept", you consent to the
            use of cookies. You can also reject non-essential cookies. For more
            information, please visit our{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleReject}
            className="whitespace-nowrap"
          >
            Reject
          </Button>
          <Button
            onClick={handleAccept}
            className="whitespace-nowrap bg-peach hover:bg-peach/90"
          >
            Accept
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-2 right-2 md:static"
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
