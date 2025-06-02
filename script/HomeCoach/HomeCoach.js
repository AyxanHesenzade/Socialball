document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.MenuDiv > div');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Bütün elementlərdən active sinfini sil
            menuItems.forEach(menu => menu.classList.remove('active'));
            // Kliklənən elementə active sinfi əlavə et
            item.classList.add('active');
        });
    });

    // İlkin olaraq MenuHome aktiv olsun 
    document.querySelector('.MenuHome').classList.add('active');
});


const btnChat = document.querySelector('#btnChat');

btnChat.addEventListener('click', () => {
    window.location.href = '/pages/HomeCoach/Chat.html';
}
);


const btnNotification = document.querySelector('#btnNotification');
btnNotification.addEventListener('click', () => {
    window.location.href = '/pages/HomeCoach/Notification.html';
}
);

const btnEventsViewAll = document.querySelector('#btnEventsViewAll');
btnEventsViewAll.addEventListener('click', () => {
    window.location.href = '/pages/HomeCoach/Events.html';
}
); 

const btnCreateEvent = document.querySelector('#btnCreateEvent');
btnCreateEvent.addEventListener('click', () => {
    window.location.href = '/pages/HomeCoach/CreateEvent.html';
}
);

const btnCreateTraning = document.querySelector('#btnCrateTraning');
btnCreateTraning.addEventListener('click', ()=>{
    window.location.href = '/pages/HomeCoach/CreateTraning.html'
})



const btnTrainingViewAll = document.querySelector('#btnTrainingViewAll');
btnTrainingViewAll.addEventListener('click', ()=>{
    window.location.href = '/pages/HomeCoach/Traning.html'
})