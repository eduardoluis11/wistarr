/* This will add the YouTube videos to the "src" attribute to the iFrame tags of my portfolio page.

Thanks. Now, add a javascript switch / case here. First, detect if there's a div with the ID "police_tests_video". 
If so, execute the 2 lines of code with the "police_tests_video" variable. If that's not the case, look up for a 
div with the ID "portfolio_video_1". If it exists, execute the 2 lines of code with the "video_1" variable. Heck, 
to make things simpler, I will add a class called "iframe-container" to the iframe of the pages where I will use 
this script. So, in the switch case, look for the element whose class is "iframe-container". Then, look up the ID 
of that div with that class. If the id is "police_tests_video", execute the 2 lines of code with the 
"police_tests_video" variable. Or, if the id is "video_1", execute the 2 lines of code with the "video_1" 
variable from the selected code. And so on and so forth for the rest of this snippet. So, with these 
parameters, make a switch case to optimize this code.
*/
if (localStorage.getItem("cookieBannerDisplayed")) {

    // Find the iframe with the class "iframe-container"
    const iframe = document.querySelector("iframe.iframe-container");
    if (iframe) {
        switch (iframe.id) {
            case "police_tests_video":  // If the iframe is for the Police Tests project
                iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/lfv2mXHcS08?si=x-tpWevuH7An2Nn3");
                break;
            case "portfolio_video_1":
                iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/UJHt2U5h5fs");
                break;
            case "eduardo_fox_art_video":   // If the iframe is for Eduardo Fox's Art project
                iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/rYVvCBnYsQs");
                break;
            case "portfolio_keith_video":
                iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/RkH7mJGHUlE");
                break;
            // Add more cases as needed for other video IDs
            default:
                // Optionally handle unknown IDs
                break;
        }
    }
} 
