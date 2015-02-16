//ES5 in htmlcolletions
NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map;
NodeList.prototype.filter = HTMLCollection.prototype.filter = Array.prototype.filter;
NodeList.prototype.reduce = HTMLCollection.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.reduceRight = HTMLCollection.prototype.reduceRight = Array.prototype.reduceRight;
NodeList.prototype.every = HTMLCollection.prototype.every = Array.prototype.every;
NodeList.prototype.some = HTMLCollection.prototype.some = Array.prototype.some;
///////////////////////////////////
var audioBoxes;
var videoBoxes;

function updateBoxes() {
    audioBoxes = document.getElementsByTagName("audio");
    videoBoxes = document.getElementsByTagName("video");
}
updateBoxes();
var addEventListeners = function (element) {
    element.addEventListener("play", function (event) {
        var stop = function (player) {
            if (player != event.target) player.pause();
        }

        videoBoxes.forEach(stop);
        audioBoxes.forEach(stop);
    });

}

videoBoxes.forEach(addEventListeners);
audioBoxes.forEach(addEventListeners);
////////////////
Snap(50, 50)