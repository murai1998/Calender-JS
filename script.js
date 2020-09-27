const date = new Date();

const month = date.getMonth();
date.setDate(1);
console.log("Day", date.getDay());
console.log(month);

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
document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";
let monthDays = document.querySelector(".days");
for (let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>`;
}
monthDays.innerHTML = days;
