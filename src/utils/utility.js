const getHost = (type) =>{
    switch(type){
        case 'cats':
            return process.env.REACT_APP_CATS_HOST;
        default :
        return new Error('Incorrect Host Type');    
    }
   
}

export default getHost;