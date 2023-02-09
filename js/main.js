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

I re-added the Google Analytics code here since it won't run the exact same moment the user clicks on "I accept". Instead, Google Analytics
will only start taking data from the user after the user either refreshes the page, or enters into another page. So, if the enter the home
page and click on "I accept", Google Analytics wouldn't normally detect that.
*/
cookieButton.addEventListener("click", () => {

    // This hides the cookie banner after clicking on "I accept"
    cookieContainer.classList.remove("active");

    // This adds a cookie
    localStorage.setItem("cookieBannerDisplayed", "true");

    // Tag from Google Analytics (cookie), which takes info from the users who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-2YRG54NPH3');

    // DEBUG msg
    console.log("Google Analytics is taking your data.")
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }
}, 2000);       /* End of the cookie consent banner JS code. */

/* Tag from Google Analytics.

This will always execute if the user has the cookieBannerDisplayed cookie. That is, this will always run if the user had
previously clicked on "I accept" on the cookie consent banner.

To make the website GDPR compliant, and to prevent the YouTube cookies from appearing until after accepting the cookie consent banner, 
I will add the YouTube links to the portfolio videos by using setAttribute.

*/
if (localStorage.getItem("cookieBannerDisplayed")) {

    // DEBUG msg
    console.log("Google Analytics is taking your data.")
    
    // Tag from Google Analytics (cookie), which takes info from the users who enter the site
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-2YRG54NPH3');

    // This selects the 1st iFrame tag of my portfolio page
    video_1 = document.getElementById("portfolio_video_1")

    // This inserts the link of the 1st video into the iFrame of the 1st portfolio video
    video_1.setAttribute("src", "https://www.youtube-nocookie.com/embed/UJHt2U5h5fs");

    // This selects the 2nd iFrame tag of my portfolio page
    video_2 = document.getElementById("portfolio_video_2")

    // This inserts the link of the 1st video into the iFrame of the 2nd portfolio video
    video_2.setAttribute("src", "https://www.youtube-nocookie.com/embed/2ff_mKe0rmg");

    // This selects the 3rd iFrame tag of my portfolio page
    video_3 = document.getElementById("portfolio_video_3")

    // This inserts the link of the 1st video into the iFrame of the 3rd portfolio video
    video_3.setAttribute("src", "https://www.youtube-nocookie.com/embed/6bNyVyBNnqs")

// This else will only display a DEBUG msg if the user doesn't click on "I accept"
} else {
    // DEBUG msg
    console.log("You didn't accept our cookies. So, Google Analytics isn't working.")
}
