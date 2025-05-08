const maleDiv = document.querySelector(".genderMale");
const femaleDiv = document.querySelector(".genderFemale");



function selectGender(selectedDiv, otherDiv) {
  selectedDiv.classList.add("genderSelected");
  otherDiv.classList.remove("genderSelected");

  const selectedGenderText = selectedDiv.querySelector("p").textContent;
  console.log("Seçilmiş cinsiyyət:", selectedGenderText);
}

maleDiv.addEventListener("click", () => {
  selectGender(maleDiv, femaleDiv);
});

femaleDiv.addEventListener("click", () => {
  selectGender(femaleDiv, maleDiv);
});

