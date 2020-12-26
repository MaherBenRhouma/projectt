let ticks = setInterval((timer),10);
function timer() {
    function lockDeviceOrientationCallback() {
        // set to either landscape
        screen.orientation.lock('portrait');
        console.log("locking device orientation...");
    }
    document.addEventListener("deviceready", lockDeviceOrientationCallback, false);
}