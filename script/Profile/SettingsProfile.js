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


const settingsBtnExit = document.getElementById('settingsBtnExit'); 

settingsBtnExit.addEventListener('click', () => {
    // Parametrlər səhifəsindən çıxmaq üçün yönləndirmə
    window.location.href = 'Profile.html';
});


const LanguageBtn = document.getElementsByClassName('LanguageBtn');

LanguageBtn[0].addEventListener('click', () => {
    // Dil seçimi səhifəsinə yönləndirmə
    window.location.href = 'Language.html';
});

const ChangePasswordBtn = document.getElementsByClassName('ChangePasswordBtn');

ChangePasswordBtn[0].addEventListener('click', () => {
    // Şifrə dəyişdirmə səhifəsinə yönləndirmə
    window.location.href = 'Change-Password.html';
});







