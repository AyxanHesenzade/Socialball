const cardgeaderbutton = document.querySelectorAll('.cardgeaderbutton')

cardgeaderbutton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = '/pages/Home/TraningAbout.html'
    })
})