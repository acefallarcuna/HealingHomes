const cta = document.querySelector(".floating-cta");

if (cta) {
    setInterval(() => {
        cta.classList.add("pulse");

        setTimeout(() => {
            cta.classList.remove("pulse");
        }, 700);

    }, 5000);
}