import load from "./loadAPI";

const displayController = (()=>{

    const refreshDisplay = async () =>{
        const data = await load.fetchData('https://api.openweathermap.org/data/2.5/weather?q=Angeles&APPID=33c1d11b5147b0675d9e174a6d187961');
        if(data.cod == 400){
            console.log("CITY NOT FOUND")
        }
        
        const city = await data.name;

        const mainFrame = document.querySelector('.mainFrame');

        const cityDiv = document.createElement('h1');
        cityDiv.innerText = city;

        mainFrame.appendChild(cityDiv)

        console.log(city);
    }


    return {refreshDisplay}
})();

export default displayController;