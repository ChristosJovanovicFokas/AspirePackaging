const modal = document.getElementById("contactModal");
const open = document.getElementById("openContactModal");
const close = document.querySelector(".close");

open.onclick = () => modal.style.display = "flex";
close.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};