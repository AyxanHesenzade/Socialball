document.addEventListener('DOMContentLoaded', () => {
  let selectedRole = 'player'; // Default seçilmiş rol

  const roleRoutes = {
    player: '/pages/Player/player.html',
    parent: '/pages/parent/parent.html',
    coach: '/pages/Coach/Coach.html',
    scout: '/pages/Scout/Scout.html',
  };

  // Glider carouseli başlat
  const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    rewind: true,
    
  });

  // Rolu yeniləmək üçün funksiya
  const updateActiveRole = (role) => {
    document.querySelectorAll('.carousel-item').forEach((item) => item.classList.remove('active'));
    const selectedItem = document.querySelector(`.carousel-item[data-role="${role}"]`);
    if (selectedItem) {
      selectedItem.classList.add('active');
    }
    console.log(`Seçilən rol: ${role}`);
    const userNameDiv = document.querySelector('.UserName');
    if (userNameDiv) {
      userNameDiv.textContent = `I am ${role.charAt(0).toUpperCase() + role.slice(1)}`;
    }
  };

  // Karusel sürüşdürmə hadisəsi
  document.querySelector('.glider').addEventListener('glider-slide-visible', (e) => {
    const items = document.querySelectorAll('.carousel-item');
    const currentIndex = e.detail.slide;
    selectedRole = items[currentIndex].getAttribute('data-role');
    updateActiveRole(selectedRole);
  });

  // İstifadəçi klikləməsi
  document.querySelectorAll('.carousel-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      glider.scrollItem(index);
    });
  });

  // Continue düyməsi
  document.querySelector('.btnContinue').addEventListener('click', () => {
    const targetUrl = roleRoutes[selectedRole];
    if (targetUrl) {
      console.log(`Seçilən səhifəyə yönləndirilir: ${targetUrl}`);
      window.location.href = targetUrl;
    }
  });

  // Başlanğıc rolu aktiv et
  updateActiveRole(selectedRole);
});