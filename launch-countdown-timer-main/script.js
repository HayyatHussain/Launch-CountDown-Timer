const countDownHeadings = document.querySelectorAll("h1");

const countDown = () => {
  countDownHeadings.forEach((element) => {
    const newa = Number(element) - 1;
    element.innerText = newa;
  });
};

window.onload = setInterval(countDown, 1000);
