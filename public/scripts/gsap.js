document.addEventListener("DOMContentLoaded", () => {
    gsap.from("h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("section", { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
});
