/**
 * Created by amitraj on 26/6/14.
 */
var Sound = require('node-mpg123');
var sys = require("sys");
console.log(Sound())
var music = new Sound('/home/amitraj/abc.mp3');
music.play();
/*setTimeout(function () {
    music.pause();
}, 5000);
setTimeout(function () {
    music.resume();
}, 7000);*/
music.on('complete' ,function () {
    console.log('Done with playback!');
    music.play();
});

var stdin = process.openStdin();
console.log("Now playing... abc.mp3")
console.log(">>>")
stdin.addListener("data", function(d) {
    d= d.toString().substr(0, d.toString().length-1)
    console.log(">>>")
    if(d.toString().indexOf("pause")>-1)
        music.pause();
    else if(d.toString().indexOf("resume")>-1)
        music.resume();
    else if(d.toString().indexOf("stop")>-1)
        music.stop();
});




