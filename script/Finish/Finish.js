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
  } else {
    // Əgər sonuncu addımdırsa, localStorage-dan rolu oxu
    const role = localStorage.getItem('selectedRole');

    const roleHomeRoutes = {
      player: '/pages/Home/PlayerAndParent.html',
      parent: '/pages/Home/PlayerAndParent.html',
      coach: '/pages/HomeCoach/HomeCoach.html',
      scout: '/pages/HomeScout/HomeScout.html'
    };

    const targetUrl = roleHomeRoutes[role];

    if (targetUrl) {
      console.log(`Rol: ${role} → yönləndirilir: ${targetUrl}`);
      window.location.href = targetUrl;
    } else {
      alert('Rol tapılmadı. Zəhmət olmasa əvvəlki səhifədən bir rol seçin.');
    }
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

// OTP və ya kod inputları üçün rəqəm yoxlaması və fokuslama
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
