
grayscaleSection = document.getElementById('section-grayscale')

for (let i = 0; i < 101; i++) {
    colour = document.createElement('div');
    colour.style.backgroundColor = `hsl(0, 0%, ${i}%)`;
    colour.setAttribute('class', 'grayscale-colour');

    colourNum = document.createElement('p');
    colourNum.textContent = i;

    if (i < 60) {
        colourNum.style.color = `white`;
        colour.style.borderColor = 'white';
    } 

    colour.appendChild(colourNum);
    grayscaleSection.appendChild(colour);
}
