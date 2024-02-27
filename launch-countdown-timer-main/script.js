const day = document.getElementById("day"),
  hour = document.getElementById("hour"),
  min = document.getElementById("min"),
  sec = document.getElementById("sec");

const countDown = () => {
  let dayText = Number(day.innerText),
    hourText = Number(hour.innerText),
    minText = Number(min.innerText),
    secText = Number(sec.innerText);
  const myInterval = setInterval(() => {
    secText--;
    if (secText < 0) {
      secText = 59;
      minText--;
      if (minText < 0) {
        minText = 59;
        hourText--;
        if (hourText < 0) {
          hourText = 23;
          dayText--;
          if (dayText < 0) {
            clearInterval(myInterval);
          }
        }
      }
    }
    day.innerText = dayText;
    hour.innerText = hourText;
    min.innerText = minText;
    sec.innerText = secText;
  }, 1000);
};

window.addEventListener("load", () => {
  countDown();
});
