

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


const inputs = document.querySelectorAll('.code-input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    // Əgər rəqəm deyilsə, boşalt
    if (!/^\d$/.test(input.value)) {
      input.value = '';
    }
  });
});

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (!/^\d$/.test(input.value)) {
      input.value = '';
      return;
    }
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

