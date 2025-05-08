const maleDiv = document.querySelector('.genderMale');
const femaleDiv = document.querySelector('.genderFemale');

function selectGender(selectedDiv, otherDiv) {
  selectedDiv.classList.add('genderSelected');
  otherDiv.classList.remove('genderSelected');

  
  const selectedGenderText = selectedDiv.querySelector('p').textContent;
  console.log('Seçilmiş cinsiyyət:', selectedGenderText);
}

maleDiv.addEventListener('click', () => {
  selectGender(maleDiv, femaleDiv);
});

femaleDiv.addEventListener('click', () => {
  selectGender(femaleDiv, maleDiv);
});



const select = document.getElementById("position");
const markers = document.querySelectorAll(".position-marker");


function handlePositionSelection(position) {
   
    markers.forEach(marker => {
        if (marker.dataset.position === position) {
            marker.classList.add("selected");
        } else {
            marker.classList.remove("selected");
        }
    });

    
    select.value = position;

    
    console.log("Seçilən pozisiya:", position);
}


select.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    handlePositionSelection(selectedValue);
});


markers.forEach(marker => {
    marker.addEventListener("click", () => {
        const selectedPosition = marker.dataset.position;
        handlePositionSelection(selectedPosition);
    });
});





