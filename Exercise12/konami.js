const target = 'konami';
const pressedKeys = [];

document.addEventListener('keypress', (e) => {
    pressedKeys.push(e.key);
    const str = pressedKeys.slice(-target.length).join('');

    if(target === str) {
        const ele = document.getElementById('konami');
        const embed = document.createElement('div')
        embed.textContent = 'Finish Him!!!';
        ele.appendChild(embed);
    }
})