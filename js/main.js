/* Cookie consent banner code. Taken from: https://github.com/Godsont/Cookie-Consent-Banner/blob/master/main.js */

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

/* This will execute if the user clicks on "I accept" on the cookie banner.

I decided to add here Google Analytic's tag so that I will only take users' private data if they
click on "I accept", so that I don't take their private data if they don't accept the cookies. Google's tag is just
another type of cookie.

I ended up removing the Google Analytics code from here since it wil only execute the 1st time the user clicks on "I accept".
That's bad since I will only be able to track user information if the user eneters the 1st time on the home page, but not whenever 
he visits another page withing my site. 
*/
cookieButton.addEventListener("click", () => {

    // This hides the cookie banner after clicking on "I accept"
    cookieContainer.classList.remove("active");

    // This adds a cookie
    localStorage.setItem("cookieBannerDisplayed", "true");

    // Tag from Google Analytics (cookie), which takes info from the sers who enter the site
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
  
    // gtag('config', 'G-2YRG54NPH3');
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);       /* End of the cookie consent banner JS code. */

/* Tag from Google Analytics.

This will always execute if the user has the cookieBannerDisplayed cookie. That is, this will always run if the user had
previously clicked on "I accept" on the cookie consent banner.
*/
if (localStorage.getItem("cookieBannerDisplayed")) {
    
    // Tag from Google Analytics (cookie), which takes info from the sers who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-2YRG54NPH3');
}
