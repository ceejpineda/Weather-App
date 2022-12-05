import dusk from './resources/dusk_rainy.jpg'

const layout = (()=>{

    const initialLoad = () =>{
        console.log('hello')
        const body = document.getElementById('content');

        const mainFrame = document.createElement('div');
        mainFrame.classList.add('mainFrame');
        body.appendChild(mainFrame);
    }

    return {initialLoad};
})();

export default layout;