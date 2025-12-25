document.addEventListener("DOMContentLoaded", () => {
    const headerPanel = document.querySelector(".header-panel");
    const navItems = document.querySelectorAll(".nav-item");
    const panelItems = document.querySelectorAll(".panel-item");
    const pageContent = document.querySelector(".page-content");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const target = item.getAttribute("data-panel");

            panelItems.forEach(panel => {
                panel.classList.toggle(
                    "is-active",
                    panel.getAttribute("data-panel") === target
                );
            });

            headerPanel.classList.add("is-open");
            pageContent.classList.add("is-blurred");
        });
    });

    headerPanel.addEventListener("mouseleave", () => {
        headerPanel.classList.remove("is-open");
        pageContent.classList.remove("is-blurred");
    });
});
