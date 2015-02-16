//ES5 in htmlcolletions
['forEach', 'map', 'filter', 'reduce', 'reduceRight', 'every', 'some'].forEach(
    function (p) {
        NodeList.prototype[p] = HTMLCollection.prototype[p] = Array.prototype[p];
    });
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
function Player(src, w, h) {
    this.w=w;
    this.h=h;
    this.playerControl = Snap(w, h)
    this.button = this.playerControl.circle(w / 2, h / 2, ((w + h) / 2) / 2).attr({
        fill: "#000"
    });
    this.closer =
        this.button.parent = this; //link for access from function
    this.controlFunction = function (event) {
        if (this.parent.player.paused) {
            this.parent.player.play();
            console.log("play");
            var th = this; // limk for in timer
            this.timer = setInterval(function () {
                console.log(th.parent.player.currentTime, th.parent.player.duration, th.parent.w)
th.parent.closer.attr({x:th.parent.player.currentTime/th.parent.player.duration*th.parent.w-th.parent.w})
            }, 1000)
        } else {
            this.parent.player.pause();
            console.log("pause")

        }
    }
    this.button.click(this.controlFunction);
    this.closer = this.playerControl.rect(-w, 0, w, h).attr({
        fill: "#FFF",
        
    });
    
    this.closer.click(this.controlFunction);
    this.closer.parent=this;
    
    this.player = new Audio(src);
    this.player.paused = true;
    var th = this; // llmk for in event
    this.player.addEventListener("pause", function () {
        clearInterval(th.button.timer);
    });
    this.maxDuration = this.player.duration;
    
    this.playerControl.append(this.player);
}
player = new Player("media/psycho.mp3", 50, 50);