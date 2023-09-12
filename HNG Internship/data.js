
function updateTime() {
    let today = new Date();
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = today.getUTCHours();
    let minutes = today.getUTCMinutes();
    let seconds = today.getUTCSeconds();
    let milliseconds = today.getUTCMilliseconds();
    let gmt = "AM";

    days.forEach((day,i) =>{
        if(i == new Date().getDay()){
            document.getElementById("day").innerHTML = day;
        }
    }
    )
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        gmt = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    let time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds + gmt;

    document.getElementById("time").innerHTML = time;
    
}

updateTime();
setInterval(updateTime, 1);