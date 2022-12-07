const load =( () => {
    
    const fetchData = async (url) =>{
        const apiUrl = url; 
        const response = await fetch(apiUrl,{mode: 'cors'});
        if(response.status != "200"){
            const data = await response.json();
            return data;
        }else{
            const data = await response.json();
            return data;
        }
    }
    
    return {fetchData}
})();

export default load;