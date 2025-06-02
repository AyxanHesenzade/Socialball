
  const btnParticipants = document.getElementById("btnParticipants");
  const btnAbout = document.getElementById("btnAbout");
  const participantsDiv = document.querySelector(".ParticipantsDiv");
  const aboutDiv = document.querySelector(".AboutDiv");
  const headerbutton1 = document.querySelector('.headerbutton1')


  headerbutton1.addEventListener('click', ()=>{
    window.location.href = '/pages/HomeCoach/HomeCoach.html';
  })

  
  participantsDiv.classList.add("show");

  btnParticipants.addEventListener("click", () => {
    
    btnParticipants.classList.add("btnSelected");
    btnAbout.classList.remove("btnSelected");

    
    participantsDiv.classList.remove("None");
    aboutDiv.classList.remove("show");

  });

  btnAbout.addEventListener("click", () => {
    
    btnAbout.classList.add("btnSelected");
    btnParticipants.classList.remove("btnSelected");

    
    aboutDiv.classList.add("show");
    participantsDiv.classList.add("None");
  });


  
