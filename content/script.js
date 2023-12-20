document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    const close = document.getElementById('close');
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});

