let newdate = new Date();

// Inserting Day
const day = newdate.getDay();
const datearr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.querySelector(".day").innerHTML = datearr[day];

// Inserting Date
const date = newdate.getDate();
const month = newdate.getMonth();
const year = newdate.getFullYear();
const fullDate = `${date}/${month}/${year}`
document.querySelector(".date").innerHTML = fullDate;


// Inserting and Updating Time
setInterval(() => {
    newdate = new Date();
    const hour = newdate.getHours();
    const min = newdate.getMinutes();
    const secs = newdate.getSeconds();
    const time = `${hour}:${min}.${secs}`;
    document.querySelector(".time").innerHTML = time;
}, 1000);