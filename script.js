let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  // calculate actual hours,mins, secs from date()
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  // calculate the rotation degrees
  let hRotation = 30 * h + m / 2;
  let mRotation = 6 * m + s / 10;
  let sRotation = 6 * s;
  //   apply transform to the hands
  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
