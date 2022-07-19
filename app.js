/*calendar*/
const date = new Date();
const renderCalendar = () => {
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevlastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // This value is not correct, which is why you see some glitchyness when switching the date
    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    document.querySelector(".date h1").innerHTML = date.toLocaleDateString('default', { month: 'long' })
    document.querySelector(".date p").innerHTML = date.toDateString();
    let days = "";
    for(let x = firstDayIndex; x > 0;x--) {
        days += `<div class="prev-date">${prevlastDay - x + 1}</div>`;
    }
    for(let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today clickable" data-date=${i}>${i}</div>`;
    } else{
        days += `<div class="clickable" data-date=${i}>${i}</div>`
    }
    }
    for(let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
    // Must be rebound each time since the date div's are added dynamically
    for (const clickableDate of document.querySelectorAll('.clickable[data-date]'))
        clickableDate.addEventListener('click', e => {
            const newDate = parseInt(e.target.getAttribute('data-date'))
            if (newDate)
                date.setDate(newDate)
            renderCalendar()
        })
}
document.querySelector(".prev").addEventListener("click",() => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar()
});
document.querySelector(".next").addEventListener("click",() => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
});
renderCalendar()

/* Home.HTML */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}); 


/*Scroll-Behavior*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

//Email 
