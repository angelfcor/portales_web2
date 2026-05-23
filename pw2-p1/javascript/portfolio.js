document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".skill-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.parentElement.querySelector(".skill-content");
            const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

            document.querySelectorAll(".skill-content").forEach(c => {
                c.style.maxHeight = "0px";
            });
            document.querySelectorAll(".skill-btn").forEach(b => {
                b.classList.remove("active");
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                btn.classList.add("active");
            }
        });
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = link.getAttribute("href");
            if (id === "#") return;
            const target = document.querySelector(id);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
