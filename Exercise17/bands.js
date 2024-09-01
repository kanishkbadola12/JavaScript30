const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = (bandName) => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

const bandsContainer = document.querySelector('#bands');

bands.map(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandsContainer.appendChild(li);
});
