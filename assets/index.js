/* index.js for The Highliet's Website */

// Attach the main function.
window.addEventListener('load', init);

function init(event) {
    // Declare variables.
    let clock = document.querySelector("header nav .right time");
    let pixLink = document.querySelector("main .social-icons #pixlink");
    let contactBtn = document.querySelector("header nav .left #contactbtn");
    let projectsBtn = document.querySelector("main .buttons #projectsbtn");
    let moviesBtn = document.querySelector("main .buttons #moviesbtn");
    let xpBtn = document.querySelector("main .buttons #xpbtn"); // xp = 'Experience'
    let closeBtns = document.querySelectorAll(".overlay .dialog .close");
    let pixaratedBtn = document.querySelector(".overlay#movies #visitPixarated");
    
    let contactBox = document.querySelector(".overlay#contact");
    let projectsBox = document.querySelector(".overlay#projects");
    let moviesBox = document.querySelector(".overlay#movies");
    let xpBox = document.querySelector(".overlay#xp");

    // Display time every half-a-second.
    setInterval(() => displayTime(clock), 1000);

    // Close dialog box when clicked.
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            // Fetch the overlay to which the close button belong.
            let parentBox = closeBtn.parentElement.parentElement.parentElement;

            // Remove the active class.
            parentBox.classList.remove('active');

            // Unlock the scrolling of web page and 
            // return to the previous scroll position.
            document.documentElement.classList.remove('locked');
            window.history.back();
        })
    });

    // Open dialog box when button is clicked.
    contactBtn.addEventListener('click', () => openDialog(contactBox));
    projectsBtn.addEventListener('click', () => openDialog(projectsBox));
    moviesBtn.addEventListener('click', () => openDialog(moviesBox));
    xpBtn.addEventListener('click', () => openDialog(xpBox));

    // Go to "Pixarated" YouTube channel 
    // when clicked on the button.
    pixaratedBtn.addEventListener('click', function() {
        pixLink.click();
    });
}

function displayTime(clock) {
    // Fetch the time for the clock.
    let today = new Date(),
        hr = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Place a zero on the front accordingly.
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    time = `${hr}:${min}:${sec}`;

    // Print time on the clock.
    clock.textContent = time;
}

function openDialog(box) {
    // Open the dialog by making it active.
    box.classList.add('active');

    // Lock scrolling of web page, and also 
    // fix the overlay by going to top.
    document.documentElement.classList.add('locked');
    window.location.href = "#";
}