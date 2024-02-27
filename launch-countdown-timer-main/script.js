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
    day.innerText = `0${dayText}`;
    if (toString(hourText.length) == 1) {
      hour.innerText = `0${hourText}`;
    } else {
      hour.innerText = hourText;
    }
    if (toString(minText).length == 1) {
      min.innerText = `0${minText}`;
    } else {
      min.innerText = minText;
    }
    if (toString(secText).length == 1) {
      sec.innerText = `0${secText}`;
    } else {
      sec.innerText = secText;
    }
  }, 1000);
};

window.addEventListener("load", () => {
  countDown();
});
