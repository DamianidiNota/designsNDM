import CookieConsent from "react-cookie-consent";

function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="designsNDMCookieConsent"
      style={{
        background: "#fff",
        color: "#000",
      }}
    >
      This website uses cookies to improve your
      experience.
    </CookieConsent>
  );
}

export default CookieBanner;