let slideIndex = 0;
slider();
window.addEventListener('click', outsideClick);

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

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = 'block';
};

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = 'none';
};

function outsideClick(ev) {
    let modal = document.getElementsByClassName('modal')[0];
    let crudModal = document.getElementsByClassName('crud-modal')[0];
    if (modal !== undefined) {
        let modalId = modal.id;
        if (ev.target.id == modalId) {
            modal.style.display = 'none';
        }
    }
    if (crudModal !== undefined) {
        let modalId = crudModal.id;
        if (ev.target.id == modalId) {
            crudModal.style.display = 'none';
        }
    }
}

function makeChart() {
    let myChart = document.getElementById('my-chart').getContext('2d');

    let massPopChart = new Chart(myChart, {
        type: 'doughnut',
        data: {
            labels: ['Boston', 'Worchester', 'Springfield', 'Cambridge', 'New Bedford'],
            datasets: [{
                label: 'Population',
                data: [
                    617000,
                    181000,
                    153000,
                    106000,
                    105000,
                    950000
                ],
                backgroundColor: [
                    '#317F6E',
                    '#CCAA43',
                    '#24549E',
                    '#4BAF38',
                    '#DB0E85',
                    '#EC561A',
                    '#967CF0',
                    '#5B0C49',
                    '#F5B8FC',
                    '#A210EB',
                    '#0C9B12',
                    '#BD232F',
                    '#A54284',
                    '#582ADF',
                    '#D7BF29',
                    '#A436DE',
                    '#A30C91',
                    '#52036A',
                    '#074A58',
                    '#23ACF9',
                ],
                hoverOfset: 250,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                }
            }
        }
    })
}

let btnloadMore = document.getElementById('btnLoadMore');
if (btnloadMore !== null) {
    btnloadMore.addEventListener('click', () => {

        let otherCommentsSection = document.getElementsByClassName('comment-others')[0];
        console.log(otherCommentsSection);
        let div = document.createElement('div');
        div.classList = 'comment-card';
        div.innerHTML = `<img src="https://pbs.twimg.com/profile_images/1386230357897383938/P5OdLQaO_400x400.jpg" alt="">
        <a href="#" class="my-2">
            <h5 class="mb-2">Jason Statham</h5>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ducimus!</span>
        </a>`;
        otherCommentsSection.appendChild(div);
    });
}

let rbCard = document.getElementById('card-type-list');
let rbTable = document.getElementById('table-type-list');
rbCard.addEventListener('change', changeListType);
rbTable.addEventListener('change', changeListType);

function changeListType(ev) {
    let tableSection = document.getElementById('employee-table');
    let cardsSection = document.getElementById('employee-cards');
    if (ev.target.id === 'table-type-list') {
        tableSection.style.display = 'block';
        cardsSection.style.display = 'none';
    }

    else {
        tableSection.style.display = 'none';
        cardsSection.style.display = 'block';
    }
};

function changeDayoffList(value) {
    let body = document.getElementsByTagName('body')[0];
    switch (value) {
        case 1:
            body.style.backgroundColor = 'red';

            break;

        case 2:
            body.style.backgroundColor = 'green';

            break;

        case 3:
            body.style.backgroundColor = 'black';

            break;

        case 4:
            body.style.backgroundColor = 'tomato';

            break;
    }
}



