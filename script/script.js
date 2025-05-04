const aboutBtn = document.getElementById('aboutBtn');
const activityBtn = document.getElementById('activityBtn');

const aboutContent = document.getElementById('aboutContent'); 
const activityContent = document.getElementById('activityContent');

// İlk girişdə "About" görünsün, "Activity" gizli olsun
activityContent.style.display = 'none';

aboutBtn.addEventListener('click', function () {
  aboutBtn.classList.add('custom-button-active');
  aboutBtn.classList.remove('custom-button');

  activityBtn.classList.add('custom-button');
  activityBtn.classList.remove('custom-button-active');


  activityContent.style.display = 'none';
});

activityBtn.addEventListener('click', function () {
  activityBtn.classList.add('custom-button-active');
  activityBtn.classList.remove('custom-button');

  aboutBtn.classList.add('custom-button');
  aboutBtn.classList.remove('custom-button-active');

 
  activityContent.style.display = 'grid';
  aboutContent.style.display = 'none';
});


const likeBtn = document.querySelector('.likeBtn');

likeBtn.addEventListener('click', function() {
  likeBtn.classList.toggle('active');
});