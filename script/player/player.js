// Scroll seçimi
const numbers = document.querySelectorAll('.number');
const container = document.querySelector('.scroll-container');

let selectedAge = null;
container.addEventListener('scroll', function () {
  let center = container.scrollTop + container.offsetHeight / 2;
  numbers.forEach(function (number) {
    let numberPosition = number.offsetTop + number.offsetHeight / 2;
    if (Math.abs(center - numberPosition) < number.offsetHeight / 2) {
      number.classList.add('selected');
      selectedAge = number.innerHTML;
      console.log("Seçilmiş Yaş :", selectedAge);
      
    } else {
      number.classList.remove('selected');
    }
  });
});

const steps = document.querySelectorAll('.step');
let currentStep = 0;


function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}

// İrəli (Continue) düyməsi
document.querySelector('.btnContinue').addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

// Bütün geri düymələr üçün
document.querySelectorAll('.button1').forEach(button => {
  button.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateSteps();
    }
  });
});
