// Search button 
function openModal() {
    document.getElementById("overlay").style.top = "0px";
}
function closeModal() {
    document.getElementById("overlay").style.top = "-100vh";
}

// Menu
function openModalMenu() {
    document.getElementById("overlayMenu").style.top = "0px";
  }
  function closeModalMenu() {
    document.getElementById("overlayMenu").style.top = "-100vh";
  }

// Swiper
var swiper = new Swiper(".swiper-feedback", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
        },
});

// Tabs
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    // Скрываем все элементы с классом "tab-content"
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    // Удаляем класс "active" со всех кнопок с классом "tablinks"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
    }
    // Отображаем текущую вкладку и добавляем класс "active" к кнопке, которая открывает эту вкладку
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
    }