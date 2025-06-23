/* Tag from Google Analytics.

This will always execute if the user has the cookieBannerDisplayed cookie. That is, this will always run if the user had
previously clicked on "I accept" on the cookie consent banner.

To make the website GDPR compliant, and to prevent the YouTube cookies from appearing until after accepting the cookie consent banner,
I will add the YouTube links to the portfolio videos by using setAttribute.

*/
if (localStorage.getItem("cookieBannerDisplayed")) {

    // This selects the 1st iFrame tag of my portfolio page
    video_1 = document.getElementById("portfolio_video_1")

    // This inserts the link of the 1st video into the iFrame of the 1st portfolio video
    video_1.setAttribute("src", "https://www.youtube-nocookie.com/embed/UJHt2U5h5fs");

    // This selects the Wagtail web app iFrame tag
    video_4 = document.getElementById("portfolio_video_4")

    // This inserts the link of the Wagtail web app into the iFrame of the Wagtail web app
    video_4.setAttribute("src", "https://www.youtube-nocookie.com/embed/rYVvCBnYsQs");

    // This will get the div where I'll store Keith's video, and insert the video into the div
    keith_video = document.getElementById("portfolio_keith_video")
    keith_video.setAttribute("src", "https://www.youtube-nocookie.com/embed/RkH7mJGHUlE")

    // This will get the div where I'll store Police Tests' video, and insert the video into the div
    police_tests_video = document.getElementById("police_tests_video")
    police_tests_video.setAttribute("src", "https://www.youtube-nocookie.com/embed/lfv2mXHcS08?si=x-tpWevuH7An2Nn3")

// This else will only display a DEBUG msg if the user doesn't click on "I accept"
} else {
    // DEBUG msg
    console.log("You didn't accept our cookies. So, Google Analytics isn't working.")
}