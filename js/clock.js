const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

const getTime = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  
  const minutes = date.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360 ) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hourDegrees = ((minutes / 12) * 360 ) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(getTime, 1000);