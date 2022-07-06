/* Cookie consent banner code. Taken from: https://github.com/Godsont/Cookie-Consent-Banner/blob/master/main.js */

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

/* This will execute if the user clicks on "I accept" on the cookie banner.

I decided to add here Google Analytic's tag so that I will only take users' private data if they
click on "I accept", so that I don't take their private data if they don't accept the cookies. Google's tag is just
another type of cookie.
*/
cookieButton.addEventListener("click", () => {

    // This hides the cookie banner after clicking on "I accept"
    cookieContainer.classList.remove("active");

    // This adds a cookie
    localStorage.setItem("cookieBannerDisplayed", "true");

    // Tag from Google Analytics (cookie), which takes info from the sers who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-2YRG54NPH3');
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);       /* End of the cookie consent banner JS code. */
