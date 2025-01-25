const accordionButtons = document.getElementsByClassName("accordion");
Array.from(accordionButtons).forEach(button => {
    button.addEventListener("click", function () {
        Array.from(accordionButtons).forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.classList.remove("active");
                otherButton.nextElementSibling.style.maxHeight = null;
            }
        });

        this.classList.toggle("active");
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
    });
});