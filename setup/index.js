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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
tempDay = tempDate.getDate();

// let futureDate = new Date(2020, 3, 24, 11, 0, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

// console.log(weekday)
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemaindingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);

  const oneDay = 24 * 60 * 60 * 1000;
  // console.log(oneDay);
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  // console.log(days);
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if(item < 10) {
      return (item = `0${item}`);
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
   });

   if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
   }
}

let countdown = setInterval(getRemaindingTime, 1000)

getRemaindingTime();