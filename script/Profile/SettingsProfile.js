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

     
    document.querySelector('.MenuProfile').classList.add('active');
});




