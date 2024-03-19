function togglePopup() {
    document
        .getElementById("popup-destination1")
        .classList
        .toggle("active");
}
function togglePopup2() {
    document
        .getElementById("popup-destination2")
        .classList
        .toggle("active");
}
function togglePopup3() {
    document
        .getElementById("popup-destination3")
        .classList
        .toggle("active");
}
function togglePopup4() {
    document
        .getElementById("popup-destination4")
        .classList
        .toggle("active");
}
function togglePopup5() {
    document
        .getElementById("popup-destination5")
        .classList
        .toggle("active");
}
function togglePopup6() {
    document
        .getElementById("popup-destination6")
        .classList
        .toggle("active");
}
function togglePopup7() {
    document
        .getElementById("popup-destination7")
        .classList
        .toggle("active");
}
function togglePopup8() {
    document
        .getElementById("popup-destination8")
        .classList
        .toggle("active");
}


var menuItem = document.querySelector(".menu-item.icon-cart");

menuItem.innerHTML = "";

var link = document.createElement("a");
link.href = "/tiket"; 


var img = document.createElement("img");
img.src = "img/Cart.png"; 
img.alt = "Keranjang Belanja"; 


link.appendChild(img);


menuItem.appendChild(link);




(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu
            .classList
            .toggle("open");
        menuOverlay
            .classList
            .toggle("active");
        document
            .body
            .classList
            .toggle("hidden-scrolling");
    }

    navMenu.addEventListener("click", (event) => {
        if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
            // if menuItemHasChildren is already expanded, collapse it
            if (menuItemHasChildren.classList.contains("active")) {
                collapseSubMenu();
            } else {
                // collapse existing expanded menuItemHasChildren
                if (navMenu.querySelector(".menu-item-has-children.active")) {
                    collapseSubMenu();
                }
                // expand new menuItemHasChildren
                menuItemHasChildren
                    .classList
                    .add("active");
                const subMenu = menuItemHasChildren.querySelector(".sub-menu");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        }
    });
    function collapseSubMenu() {
        navMenu
            .querySelector(".menu-item-has-children.active .sub-menu")
            .removeAttribute("style");
        navMenu
            .querySelector(".menu-item-has-children.active")
            .classList
            .remove("active");
    }
    function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
            toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
        }
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
            resizeFix();
        }
    });

})();
