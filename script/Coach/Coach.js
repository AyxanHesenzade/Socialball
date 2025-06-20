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
      console.log("Seçilmiş Scout  Yaş :", selectedAge);
      
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
  } else {
    window.location.href = '/pages/Finish/Finish.html';
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

const input = document.getElementById("uploadPhoto");
const preview = document.getElementById("profilePreview");

 // İstifadəçi şəkil seçəndə:
input.addEventListener("change", function () {
  const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        preview.src = reader.result; // şəkli göstər
        localStorage.setItem("profilePhoto", reader.result); // yadda saxla
      };

      reader.readAsDataURL(file); // base64 formatına çevir
    }
});

  // Səhifə yüklənəndə daha əvvəlki şəkli yüklə
  window.addEventListener("DOMContentLoaded", () => {
    const savedPhoto = localStorage.getItem("profilePhoto");
    if (savedPhoto) {
      preview.src = savedPhoto;
    }
  });


const documentSection = document.getElementById("documentSection");
const addDocumentBtn = documentSection.querySelector(".AddDocument");

addDocumentBtn.addEventListener("click", () => {
  const newGroup = document.createElement("div");
  newGroup.classList.add("club-group");

  const inputMain = document.createElement("div");
  inputMain.classList.add("inputMain");

  const newInput = document.createElement("input");
  newInput.type = "file";
  newInput.placeholder = "Select Document";

  const deleteImg = document.createElement("img");
  deleteImg.src = "/assets/icon/close-circle.svg";
  deleteImg.alt = "delete";
  deleteImg.classList.add("delete-icon");

  deleteImg.addEventListener("click", () => {
    documentSection.removeChild(newGroup);
  });

  inputMain.appendChild(newInput);
  inputMain.appendChild(deleteImg);

  const checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("checkbox1");

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";

  const newP = document.createElement("p");
  newP.textContent = "Lorem ipsum dolor sit amet.";

  checkboxDiv.appendChild(newCheckbox);
  checkboxDiv.appendChild(newP);

  newGroup.appendChild(inputMain);
  newGroup.appendChild(checkboxDiv);

  documentSection.insertBefore(newGroup, addDocumentBtn);
});


const sertificateSection = document.getElementById("SertificateSection");
const addSertificateBtn = sertificateSection.querySelector(".AddSertificate");

addSertificateBtn.addEventListener("click", () => {
    const newGroup = document.createElement("div");
    newGroup.classList.add("sertificate-group");

    const inputMain = document.createElement("div");
    inputMain.classList.add("inputMain");

    const newInput = document.createElement("input");
    newInput.type = "file";
    newInput.placeholder = "Download the certificates";

    const deleteImg = document.createElement("img");
    deleteImg.src = "/assets/icon/close-circle.svg";
    deleteImg.alt = "delete";
    deleteImg.classList.add("delete-icon");

    deleteImg.addEventListener("click", () => {
        sertificateSection.removeChild(newGroup);
    });

    inputMain.appendChild(newInput);
    inputMain.appendChild(deleteImg);

    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox1");

    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = `sertificate-checkbox-${Date.now()}`;

    const newP = document.createElement("p");
    newP.textContent = "Lorem ipsum dolor sit amet.";

    checkboxDiv.appendChild(newCheckbox);
    checkboxDiv.appendChild(newP);

    newGroup.appendChild(inputMain);
    newGroup.appendChild(checkboxDiv);

    sertificateSection.insertBefore(newGroup, addSertificateBtn);
});


const playerSection = document.getElementById("playerSection");
const addPlayerBtn = playerSection.querySelector(".AddPlayer");

addPlayerBtn.addEventListener("click", () => {
    const newGroup = document.createElement("div");
    newGroup.classList.add("player-group");

    const inputMain = document.createElement("div");
    inputMain.classList.add("inputMain");

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Full name";

    const deleteImg = document.createElement("img");
    deleteImg.src = "/assets/icon/close-circle.svg";
    deleteImg.alt = "delete";
    deleteImg.classList.add("delete-icon");

    deleteImg.addEventListener("click", () => {
        playerSection.removeChild(newGroup);
    });

    inputMain.appendChild(newInput);
    inputMain.appendChild(deleteImg);

    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox1");

    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = `player-checkbox-${Date.now()}`;

    const newP = document.createElement("p");
    newP.textContent = "Lorem ipsum dolor sit amet.";

    checkboxDiv.appendChild(newCheckbox);
    checkboxDiv.appendChild(newP);

    newGroup.appendChild(inputMain);
    newGroup.appendChild(checkboxDiv);

    playerSection.insertBefore(newGroup, addPlayerBtn);
});



