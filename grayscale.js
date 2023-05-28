
grayscaleSection = document.getElementById('section-grayscale')

for (let i = 0; i < 101; i++) {
    m = document.createElement('div');
    m.style.backgroundColor = `hsl(0, 0%, ${i}%)`;
    m.setAttribute('class', 'grayscale-ranges');

    n = document.createElement('p');
    n.textContent = i;

    if (i < 60) {
        n.style.color = `white`;
        m.style.borderColor = 'white';
    } 

    m.appendChild(n);
    grayscaleSection.appendChild(m);
}
