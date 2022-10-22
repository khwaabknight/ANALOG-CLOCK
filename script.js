
const hourHand = document.querySelector('#hourHand');
const minuteHand = document.querySelector('#minuteHand');
const secondHand = document.querySelector('#secondHand');
function update() {
    // console.log("object");
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
    const minute = (second + currentDate.getMinutes()) / 60;
    const hour = (minute + currentDate.getHours()) / 12;
    secondHand.style.setProperty('--rotation', second * 360);
    minuteHand.style.setProperty('--rotation', minute * 360);
    hourHand.style.setProperty('--rotation', hour * 360);
}
setInterval(update, 1000);