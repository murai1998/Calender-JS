const date = new Date();

const render = () => {
  const month = date.getMonth();
  date.setDate(1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let firstDayIndex = date.getDay();
  let lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log("last", lastDayIndex);
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.toDateString();
  let prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  console.log(prevLastDay);
  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
  }
  let monthDays = document.querySelector(".days");
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class='today'>${i}</div>`;
    } else {
      days += `<div >${i}</div>`;
    }
  }
  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    days += `<div class='next-date'>${i}</div>`;
  }
  monthDays.innerHTML = days;
};
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let adds = document.querySelector(".days");
prev.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  render();
};
// adds.onclick = () => {
//   let text = "";
//   text += `<div>Add text</div>`;
//   console.log(text);
//   document.querySelector(".adds").innerHTML = date.toDateString();
//   render();
// };
next.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  render();
};

render();
