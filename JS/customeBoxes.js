const boxButtons = document.querySelectorAll('.boxes button');

boxButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        //toggle 
        button.classList.toggle('selected');

    });
});

const designButtons = document.querySelectorAll('.basicColorDesign button');

designButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        
        if (button.classList.contains('selected')){
            button.classList.remove('selected');
        }else {
            //remove all selected
            designButtons.forEach(btn => btn.classList.remove('selected'));
        
            //Select button 
            button.classList.add('selected');
        }
    });
});


const quoteModal = document.getElementById("quoteModal");
const openBtn = document.getElementById("openQuote");
const closeBtn = document.querySelector(".close-quote");

openBtn.onclick = () => quoteModal.style.display = "flex";
closeBtn.onclick = () => quoteModal.style.display = "none";
console.log("Modal is", quoteModal.style.display);

window.onclick = (event) => {
    if (event.target === quoteModal) {
        quoteModal.style.display = "none";
    }
};