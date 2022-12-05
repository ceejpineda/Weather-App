import dusk from './resources/dusk_rainy.jpg'

const layout = (()=>{

    const initialLoad = () =>{
        console.log('hello')
        const body = document.getElementById('content');

        const mainFrame = document.createElement('div');
        mainFrame.classList.add('mainFrame');
        body.appendChild(mainFrame);

        const title = document.createElement('h1');
        title.innerText = "Weather App"

        mainFrame.appendChild(title);
    }

    return {initialLoad};
})();

export default layout;