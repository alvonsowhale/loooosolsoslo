// For profile button
function followOnTwitter() {
    window.open('https://twitter.com/intent/follow?screen_name=havelooops', '_blank');
}

function shareButton() {
    window.open(`https://twitter.com/intent/tweet?text=Where%20is%20my%20loooooppsss???%20@havelooops`, "_blank")
}


// Select the 'Like' button
const likeButton = document.querySelector('figcaption > div > button');

// Select the span that displays the like count
const likeCountSpan = document.querySelector('.likes > span');

// Select the audio element
const niceSound = document.getElementById('likeSound');
const toTheMoonSound = document.getElementById('toTheMoon')

// Add a click event listener to the 'Like' button
likeButton.addEventListener('click', function() {
    // Get the current like count and convert it to a number
    let currentCount = parseInt(likeCountSpan.textContent);
    currentCount++;
    likeCountSpan.textContent = currentCount;

    // SOUND
    if (currentCount === 69) {
        niceSound.play();
    }
    if (currentCount === 1000000){
        toTheMoonSound.play()
    }
});