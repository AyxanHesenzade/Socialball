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
    window.location.href = '/pages/Home/Chat.html';
}
);


const btnNotification = document.querySelector('#btnNotification');
btnNotification.addEventListener('click', () => {
    window.location.href = '/pages/Home/Notification.html';
}
);

const btnEventsViewAll = document.querySelector('#btnEventsViewAll');
btnEventsViewAll.addEventListener('click', () => {
    window.location.href = '/pages/Home/Events.html';
}
); 

const btnTrainingViewAll = document.querySelector('#btnTrainingViewAll');
btnTrainingViewAll.addEventListener('click', ()=>{
    window.location.href = '/pages/Home/Traning.html'
})


const btnEventAbout = document.querySelectorAll('.btnEventAbout');

btnEventAbout.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = '/pages/Home/EvenstAbout.html';
  });
});

const cardgeaderbutton = document.querySelectorAll('.cardgeaderbutton')

cardgeaderbutton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = '/pages/Home/TraningAbout.html'
    })
})