const pages = document.querySelectorAll('.onboarding-page');
const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle('active', i === index);
  });

  // Əgər 4-cü səhifəyə keçilibsə (index === 3), Next və Skip gizlənir
  if (index === 3) {
    nextBtn.style.display = 'none';
    skipBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
    skipBtn.style.display = 'block';
  }
}

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

skipBtn.addEventListener('click', () => {
  currentPage = pages.length - 1; // Son səhifəyə keç
  showPage(currentPage);
});

// İlk səhifəni göstər
showPage(currentPage);


const signUpBtn = document.querySelector('.btnSignUp');
const registerDiv = document.getElementById('registerDiv');
const overlayContent = document.querySelector('.overlay-content');
const backButton = document.getElementById('backButton');

// Açmaq üçün
signUpBtn.addEventListener('click', () => {
  registerDiv.style.display = 'flex';
  overlayContent.style.display = 'none';
  backButton.style.display = 'block'; // back düyməsini göstər
});

// Bağlamaq üçün
backButton.addEventListener('click', () => {
  registerDiv.style.display = 'none';
  overlayContent.style.display = 'flex';
  backButton.style.display = 'none'; // back düyməsini gizlət
});



