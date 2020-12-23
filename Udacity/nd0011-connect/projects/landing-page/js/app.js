document.addEventListener("DOMContentLoaded", () => {
  /**
   *
   * Manipulating the DOM exercise.
   * Exercise programmatically builds navigation,
   * scrolls to anchors from navigation,
   * and highlights section in viewport upon scrolling.
   *
   * Dependencies: None
   *
   * JS Version: ES2015/ES6
   *
   * JS Standard: ESlint
   *
   */

  /**
   * View start
   * View is responsible of manipulating the DOM and will access the data
   * stored in the model through the Controller
   */

  let view = {
    init: function () {
      this.initNavBar("navbar__list");
      this.mainContentScrollHandler();
      this.toggleActiveState();
      this.scrollUp();
    },
    createNavItem: (index, section) => {
      // <li><a href="#section1" class="menu__link">section 1</a></li>
      let menuItem = document.createElement("li");
      let menuLink = document.createElement("a");
      // dataset: DOMStringMap {nav: "Section 1"}
      menuLink.textContent = section.dataset.nav;
      menuLink.setAttribute("href", section.id);
      menuLink.classList.add("menu__link");
      // active first link
      if (index === 0) menuLink.classList.add("link__active");
      menuItem.appendChild(menuLink);
      return menuItem;
    },
    // Helper function to check if element is in the viewport
    isInViewport: (element, offset) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= offset &&
        rect.left >= offset &&
        rect.bottom <=
          (window.innerHeight ||
            document.documentElement.clientHeight - offset) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth - offset)
      );
    },
    // build the navbar
    initNavBar: function (navElement) {
      // Get The Nav list element
      const nav = document.getElementById(navElement);
      // Get All Sections in the page
      const sections = document.querySelectorAll("section");
      // Nav list holder
      const fragment = document.createDocumentFragment();
      // Iterate through the sections to build nav
      for (const [index, section] of sections.entries()) {
        const navItem = this.createNavItem(index, section);
        fragment.appendChild(navItem);
      }
      // Append nav to view
      nav.appendChild(fragment);
    },
    // Scroll to anchor ID using scrollTO even
    mainContentScrollHandler: () => {
      // Get The Nav list element
      const nav = document.getElementById("navbar__list");
      nav.addEventListener("click", (event) => {
        event.preventDefault();
        const targetLink = event.target;
        const targetSection = document.getElementById(
          targetLink.getAttribute("href")
        );
        // remove old active menu link
        const menuActiveLink = document.querySelector(".link__active");
        menuActiveLink.classList.remove("link__active");
        // set new active menu link
        targetLink.classList.add("link__active");
        // Scroll to target section
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
      const scroller = document.getElementById("scroll-up");
      // hide scroll to up button
      // When the user scrolls down 100px from the top of the document, show the button
      window.addEventListener("scroll", (ev) => {
        const isTop =
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100;
        scroller.classList.toggle("display--none", !isTop);
      });
    },
    // Add event listeners to the sections that listen for active
    // event. This event is triggered during window scroll.
    toggleActiveState: function () {
      window.addEventListener("scroll", () => {
        // Get All Sections in the page
        const sections = document.querySelectorAll("section");
        // Iterate through the sections
        for (const section of sections) {
          const offset = -section.offsetTop;
          const isInViewPort = this.isInViewport(section, offset);
          // add/remove visible, depending on isInViewPort conditional
          section.classList.toggle("your-active-class", isInViewPort);
          // Assign active class to nav links while scrolling
          const sectionId = section.getAttribute("id");
          if (isInViewPort) {
            let links = document.querySelectorAll(".menu__link");
            links.forEach((link) => {
              const isActiveLink = link.getAttribute("href") === sectionId;
              link.classList.toggle("link__active", isActiveLink);
            });
          }
        }
      });
    },
    scrollUp: () => {
      const scroller = document.getElementById("scroll-up");
      scroller.addEventListener("click", (event) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  };

  /**
   * End View
   */

  /**
   * Controller start
   * Controller is the link between the model and the view
   */
  let controller = {
    init: () => {
      view.init();
    },
  };

  /**
   * End Controller
   */

  /**
   * Init the application
   */
  controller.init();
});
