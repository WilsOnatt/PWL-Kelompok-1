function selectDestination(destination) {
    alert('Anda memilih destinasi: ' + destination);
}

function filterCity(element, city) {
    document.querySelectorAll('.city-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    element.classList.add('active');
    console.log('Filtering by city: ' + city);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.heart-icon').forEach(heart => {
        heart.addEventListener('click', function(e) {
            e.stopPropagation();
            this.innerHTML = this.innerHTML === '♡' ? '♥' : '♡';
            this.style.color = this.innerHTML === '♥' ? 'red' : 'black';
        });
    });

    document.querySelector('.search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pencarian akan diproses...');
    });

    document.querySelectorAll('.search-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});