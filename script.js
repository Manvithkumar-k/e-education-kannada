const messages = [
    "Detecting human...",
    "Detecting programmer...",
    "Detecting filmmaker...",
    "Detecting startup ideas...",
    "Detecting 47 unfinished projects...",
    "⚠️ System overloaded.",
    "Okay... let's continue."
];

let i = 0;

function changeMessage() {

    if (i < messages.length) {

        document.getElementById("message").innerText =
            messages[i];

        i++;

        setTimeout(changeMessage, 1200);
    }
}

changeMessage();


function enterPortfolio() {

    alert(
        "Welcome to Manvith OS 😂\n\n" +
        "Warning: Portfolio contains excessive ambition."
    );

}