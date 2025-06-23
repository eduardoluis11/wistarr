/* Cookie consent banner code. Taken from: https://github.com/Godsont/Cookie-Consent-Banner/blob/master/main.js
*
* Here’s the English translation:

> To avoid modifying `main.js`, I will create two separate JavaScript scripts: one for Google Tag Manager and another
* to activate the iframe video.
>
> In the Google Tag Manager script, I will include only the cookie consent functionality and Google Analytics. Then,
* in the iframe activation script, I will only add the code to handle videos embedded via iframe.
>
> After that, I will remove `main.js` from the detailed view page of Police Tests and instead add links to the two
new JavaScript scripts that replace `main.js` (one for Google Tag Manager and one for activating the iframe).
* */

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

/* This will execute if the user clicks on "I accept" on the cookie banner.

I decided to add here Google Analytic's tag so that I will only take users' private data if they
click on "I accept", so that I don't take their private data if they don't accept the cookies. Google's tag is just
another type of cookie.

I ended up removing the Google Analytics code from here since it wil only execute the 1st time the user clicks on "I accept".
That's bad since I will only be able to track user information if the user eneters the 1st time on the home page, but not whenever
he visits another page withing my site.

I re-added the Google Analytics code here since it won't run the exact same moment the user clicks on "I accept". Instead, Google Analytics
will only start taking data from the user after the user either refreshes the page, or enters into another page. So, if the enter the home
page and click on "I accept", Google Analytics wouldn't normally detect that.

Now, modify this JS function so that, at the end of this function, the entire page reloads. That is, that after the entirety of this function finishes executing, the web browser on the client side will refresh.
*/
cookieButton.addEventListener("click", () => {

    // This hides the cookie banner after clicking on "I accept"
    cookieContainer.classList.remove("active");

    // This adds a cookie
    localStorage.setItem("cookieBannerDisplayed", "true");

    // Tag from Google Analytics (cookie), which takes info from the users who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('custom_js', new Date());

    gtag('config', 'G-2YRG54NPH3');

    // Reload the page after everything else has executed
    window.location.reload();

    // // DEBUG msg
    // console.log("Google Analytics is taking your data.")
});


/* This shows the cookie consent banner after the user waits for 2 seconds after entering into the page. */
setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);
/* End of the cookie consent banner JS code. */

/* Tag from Google Analytics.

This will always execute if the user has the cookieBannerDisplayed cookie. That is, this will always run if the user had
previously clicked on "I accept" on the cookie consent banner.

To make the website GDPR compliant, and to prevent the YouTube cookies from appearing until after accepting the cookie consent banner,
I will add the YouTube links to the portfolio videos by using setAttribute.

*/
if (localStorage.getItem("cookieBannerDisplayed")) {

    // // DEBUG msg
    // console.log("Google Analytics is taking your data.")

    // Tag from Google Analytics (cookie), which takes info from the users who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('custom_js', new Date());

    gtag('config', 'G-2YRG54NPH3');

// This else will only display a DEBUG msg if the user doesn't click on "I accept"
} else {
    // DEBUG msg
    console.log("You didn't accept our cookies. So, Google Analytics isn't working.")
}
