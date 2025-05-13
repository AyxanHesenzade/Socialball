const positionsArenaContainer = document.querySelector(".positions_arena_container");

const positions = [
  {
    id: 1,
    name: "goalkeeper",
    style: "top: 90%; left: 50%;"
  },
  {
    id: 2,
    name: "center_back",
    style: "top: 80%; left: 50%;"
  },
  {
    id: 3,
    name: "left_back",
    style: "top: 75%; left: 20%;"
  },
  {
    id: 4,
    name: "right_back",
    style: "top: 75%; left: 80%;"
  },
  {
    id: 5,
    name: "defensive_midfielder",
    style: "top: 55%; left: 50%;"
  },
  {
    id: 6,
    name: "central_midfielder",
    style: "top: 45%; left: 25%;"
  },
  {
    id: 7,
    name: "central_midfielder",
    style: "top: 45%; left: 75%;"
  },
  {
    id: 8,
    name: "attacking_midfielder",
    style: "top: 30%; left: 50%;"
  },
  {
    id: 9,
    name: "right_winger",
    style: "top: 20%; left: 80%;"
  },
  {
    id: 10,
    name: "left_winger",
    style: "top: 20%; left: 20%;"
  },
  {
    id: 11,
    name: "striker",
    style: "top: 10%; left: 50%;"
  }
];

positions.forEach(position => {
  positionsArenaContainer.innerHTML += `
    <div class="position-marker" data-position="${position.name}" style="${position.style}">
      <img src="/assets/player/Map pin.svg" class="map-pin" />
      <img src="/assets/player/Dot.svg" class="dot-icon" />
    </div>
  `;
});



const select = document.getElementById("position");
const markers = document.querySelectorAll(".position-marker");

function handlePositionSelection(position) {
  markers.forEach((marker) => {
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

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const selectedPosition = marker.dataset.position;
    handlePositionSelection(selectedPosition);
  });
});
