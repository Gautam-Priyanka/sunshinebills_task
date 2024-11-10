const options = document.querySelectorAll(".options");
const radioBtns = document.querySelectorAll("input[name='unit-option']");
const total = document.querySelector(".total span");

const prices = {
    "one-unit": 10,
    "two-unit": 18,
    "three-unit": 24
};

radioBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        options.forEach(opt => opt.classList.remove("selected"));
        btn.closest(".options").classList.add("selected");
        total.textContent = `$${prices[btn.id].toFixed(2)} USD`;
    });
});
