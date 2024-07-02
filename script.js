const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]')

setInterval(()=>{
    const now = new Date();
    const utcTime = now.toLocaleTimeString('en-US', {timeZone: 'UTC'});
    currentTimeElement.innerText = utcTime;
},1000)

const currentDayElement = document.querySelector('[data-testid="currentDay"]')

setInterval(()=>{
    const now = new Date();
    const utcDay = now.toLocaleDateString('en-US', 
        {weekday: 'long'});
    currentDayElement.innerText = utcDay;
},1000)
