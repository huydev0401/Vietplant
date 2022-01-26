window.addEventListener("load", () => {
  // AOS
  AOS.init();

  // slider home
  $(".slider .slider__wrapper").flickity({
    cellAlign: "left",
    contain: true,
    friction: 0.5,
    wrapAround: true,
    lazyLoad: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    on: {
      ready: function () {
        let dots = $(".flickity-page-dots");
        let paging = $(".slider__control .paging");
        dots.appendTo(paging);
      },
    },
  });
  $(".control .control__btn.--prev").on("click", function () {
    $(".slider .slider__wrapper").flickity("previous");
  });
  $(".control .control__btn.--next").on("click", function () {
    $(".slider .slider__wrapper").flickity("next");
  });

  // slider about
  $(".about__slider .main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    friction: 0.5,
    pageDots: false,
    wrapAround: true,
  });

  // slider customer
  $(".customer__slider .main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    friction: 0.5,
    pageDots: false,
    imagesLoaded: true,
    wrapAround: true,
    prevNextButtons: false,
  });
  $(".control__btn.--prev").on("click", function () {
    $(".customer__slider .main-carousel").flickity("previous");
  });
  $(".control__btn.--next").on("click", function () {
    $(".customer__slider .main-carousel").flickity("next");
  });

  // detail slider
  $detailImage = $(".detail__image .carousel");
  $detailImage.flickity({
    // options
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });
  $(".img-group").on("click", ".img", function () {
    var index = $(this).index();
    $detailImage.flickity("select", index, false, true);
  });

  // accordion
  $(".accordion_tab").click(function () {
    $(".accordion_tab").each(function () {
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  });

  // back to top
  let header = document.querySelector("header");
  let back2top = document.querySelector(".back2top");
  window.addEventListener("scroll", function () {
    let pageY = window.pageYOffset;
    if (pageY > header.offsetTop + header.offsetHeight) {
      back2top.classList.add("active");
    } else {
      back2top.classList.remove("active");
    }
  });

  back2top.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  let menusHomePage = document.querySelectorAll(".homepage .product .menu li");
  menusHomePage.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      menusHomePage.forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  // heart icon
  let heartIcon = document.querySelectorAll(".act__list .heart-icon");
  heartIcon.forEach((item) =>
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    })
  );

  // toggle menu
  let toggleButton = document.querySelector(".toggle-menu");
  let modal = document.querySelector(".modal");
  let navMobile = document.querySelector(".nav-mobile");
  function removeNavMobile() {
    toggleButton.classList.remove("active");
    modal.classList.remove("active");
    navMobile.classList.remove("active");
    header.classList.remove("active");
  }
  toggleButton.addEventListener("click", function () {
    this.classList.toggle("active");
    modal.classList.toggle("active");
    navMobile.classList.toggle("active");
    header.classList.toggle("active");
  });
  modal.addEventListener("click", removeNavMobile);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991) {
      removeNavMobile();
    }
  });

  // dropdown
  const dropdownItems = document.querySelectorAll(
    "#lightdropdown .dropdown-item"
  );
  const dropdownSelect = document.querySelector(
    "#lightdropdown .dropdown-select"
  );
  const dropdownSelectText = document.querySelector(
    "#lightdropdown .dropdown-selected"
  );
  const dropdownList = document.querySelector("#lightdropdown .dropdown-list");

  dropdownSelect.addEventListener("click", function () {
    dropdownList.classList.toggle("show");
  });

  function handleSelectDropdown(e) {
    const { value } = e.target.dataset;
    dropdownSelectText.textContent = value;
    dropdownList.classList.remove("show");
    dropdownCaret.classList.remove("fa-angle-up");
  }

  dropdownItems.forEach((el) =>
    el.addEventListener("click", handleSelectDropdown)
  );

  // auth
  const authButton = document.querySelector(".auth");
  const authMenu = document.querySelector(".auth .auth__menu");
  authButton.addEventListener("click", function () {
    authMenu.classList.toggle("active");
  });

  // search
  const searchButton = document.querySelectorAll(".act__list .search__icon");
  const searchModal = document.querySelector(".search-modal");
  searchButton.forEach((item) =>
    item.addEventListener("click", function () {
      searchModal.classList.add("active");
      modal.classList.add("active");
    })
  );
  modal.addEventListener("click", function () {
    modal.classList.remove("active");
    searchModal.classList.remove("active");
    let input = document.querySelector(".search-modal input");
    input.value = "";
  });
});
