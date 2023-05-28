function shift(to) {
    if (to === 'rgb') {
        grayscaleSection = document.querySelector('#section-grayscale');
        btn = document.querySelector('#range-btn');
        grayscaleSection.style.visibility = 'hidden';
        console.log(btn)
        btn.textContent = 'Grayscale'

    }
}