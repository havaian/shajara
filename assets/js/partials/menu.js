const items = [
    {
        title: "Main",
        icon: "../public/assets/img/home.png",
        alt: "Main",
        link: "/",
    },
    {
        title: "Profile",
        icon: "../public/assets/img/user.png",
        alt: "Profile Icon",
        link: "profile",
    },
];
for (let x in items) {
    $("ul.nav__list").append(
        `<a class="nav__list-item"  href="${items[x].link}">
            <img class='nav-icon' src="${items[x].icon}" alt="${items[x].alt}">
            <p class='nav-title'>${items[x].title}</p>
        </a>`
    )
}
const app = (() => {
    let body;
    let menu;
    let menuItems;

    const init = () => {
        body = document.querySelector("body");
        menu = document.querySelector(".menu-icon");
        menuItems = document.querySelectorAll(".nav__list-item");

        applyListeners();
    };

    const applyListeners = () => {
        menu.addEventListener("click", () => toggleClass(body, "nav-active"));
    };

    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else element.classList.add(stringClass);
    };

    init();
})();

const menu_items = document.querySelectorAll(".nav__list-item");

for (let x = 0; x < menu_items.length; x++) {
    menu_items[x].addEventListener("click", () => {
        document.querySelector(".menu-icon").click();
    });
}
