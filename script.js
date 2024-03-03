let newdate = new Date();

// Creating Day
const day = newdate.getDay();
const datearr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Inserting Day
document.querySelector(".day").innerHTML = datearr[day];

// Creating Date
const date = newdate.getDate();
const month = newdate.getMonth();
const year = newdate.getFullYear();

// Formatting Date
const formattedDate = date < 10 ? '0' + date : date;
const formattedMonth = month < 10 ? '0' + month : month;
const fullDate = `${formattedDate}/${formattedMonth}/${year}`

// Inserting Date
document.querySelector(".date").innerHTML = fullDate;


// Inserting and Updating Time every second
setInterval(() => {
    newdate = new Date();
    const hour = newdate.getHours();
    const min = newdate.getMinutes();
    const secs = newdate.getSeconds();

    // Formatting Time
    const formattedHour = hour < 10 ? '0' + hour : hour;
    const formattedMin = min < 10 ? '0' + min : min;
    const formattedSecs = secs < 10 ? '0' + secs : secs;
    const time = `${formattedHour}:${formattedMin}.${formattedSecs}`;

    // Inserting and updating Time
    document.querySelector(".time").innerHTML = time;
}, 1000);