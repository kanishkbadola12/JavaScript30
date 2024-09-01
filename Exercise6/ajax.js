const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const fetchData = async (searchTerm) => {
    try {
        const regex = new RegExp(searchTerm, 'gi')
        const response = await fetch(endpoint);
        const data = await response.json();
        const citiesData = data.map(data => data.city).filter(city => city.match(regex));
        return citiesData;
    } catch(err) {
        console.log(err);
    }
}

async function handleChange() {
    const cities = await fetchData(this.value);
    const html = `
        <div class="search-container">
            ${(cities.map(city => `<div>${city}</div>`).join(''))}
        </div>
    `;
    const searchContainer = document.getElementById('search-results');
    searchContainer.innerHTML = html;
}

const input = document.getElementById('search');
input.addEventListener('keyup', handleChange);