// Switch Function
const switchTheme = () => {
    // Get root element and data-theme value
    const rootElem = document.getElementById('page-wrapper'); 
    console.log(rootElem);
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme;
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    // Set the new HTML attribute
    rootElem.setAttribute('data-theme', newTheme)

    // Set new local storage item
    localStorage.setItem('theme', newTheme)
}

// Add event listener for theme switcher 
document.querySelector('#switch-theme').addEventListener('click', switchTheme)