function UpdateClock(){
    const Now = new Date();
    const Hour = Now.getHours().toString().padStart(2,0);
    const Minute = Now.getMinutes().toString().padStart(2,0);
    const Second = Now.getSeconds().toString().padStart(2,0);
    const TimeNow = `${Hour}:${Minute}:${Second}`;
    document.getElementById("updateclock").textContent = TimeNow;
}
UpdateClock();
setInterval(UpdateClock , 1000);
// function  StyleSheet(){
//     Style = document.getElementById("updateclock").style;
//     Style.
// }

