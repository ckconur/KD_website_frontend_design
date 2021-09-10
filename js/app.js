let slideIndex = 0;
slider();
window.addEventListener('click',outsideClick);

function slider() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    if (x.length > 0) {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(slider, 4000);
    }
}

function openModal(modalId){
    let modal = document.getElementById(modalId);
    modal.style.display = 'block';
};

function closeModal(modalId){
    let modal = document.getElementById(modalId);
    modal.style.display = 'none';
};

function outsideClick(ev){
    let modal = document.getElementsByClassName('modal')[0];
    let modalId = modal.id;
    if (ev.target.id == modalId) {
        modal.style.display = 'none';
    }
}

