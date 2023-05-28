
grayscaleSection = document.getElementById('section-grayscale')

for (let i = 0; i < 101; i++) {
    m = document.createElement('div');
    m.style.backgroundColor = `hsl(0, 0%, ${i}%)`;
    m.setAttribute('class', 'grayscale-ranges');

    n = document.createElement('p');
    n.textContent = i;

    if (i < 60) {
        n.style.color = `white`;
        m.style.border = '3px solid white';
    } else {
        n.style.color = `black`;
        m.style.border = '3px solid black';
    }

    m.appendChild(n);
    grayscaleSection.appendChild(m);
}
