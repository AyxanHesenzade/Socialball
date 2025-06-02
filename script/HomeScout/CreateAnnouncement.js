const tags = document.querySelectorAll(".cardContentTag .tag");

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("selected");
  });

  const closeBtn = tag.querySelector(".closeTag");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tag.classList.remove("selected");
  });
});





const eventClose = document.querySelector('#eventClose');


eventClose.addEventListener('click', () => {
    window.location.href = '/pages/HomeScout/HomeScout.html';
}
)