document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbButton = document.querySelector(".breadcrumb-button");
    const breadcrumbHeader = document.querySelector(".breadcrumb-header");
    const breadcrumbClose = document.querySelector(".breadcrumb-close");

    // Mở breadcrumb
    breadcrumbButton.addEventListener("click", () => {
        breadcrumbHeader.classList.remove("hidden", "translate-x-full");
        breadcrumbHeader.classList.add("translate-x-0");

        breadcrumbButton.classList.add("hidden");
        breadcrumbClose.classList.remove("hidden");
    });

    // Đóng breadcrumb
    function closeBreadcrumb() {
        breadcrumbHeader.classList.add("translate-x-full");
        breadcrumbHeader.classList.remove("translate-x-0");

        setTimeout(() => {
            breadcrumbHeader.classList.add("hidden");
        }, 300);

        breadcrumbButton.classList.remove("hidden");
        breadcrumbClose.classList.add("hidden");
    }

    // Click nút đóng
    breadcrumbClose.addEventListener("click", () => {
        closeBreadcrumb();
    });

    // Click ra ngoài để đóng
    document.addEventListener("click", (event) => {
        const isClickInside = breadcrumbHeader.contains(event.target) || breadcrumbButton.contains(event.target);
        if (!isClickInside) {
            closeBreadcrumb();
        }
    });
});
