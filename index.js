

function superbowlWin(element){
    const found =  element.find(e=>{
        
        console.log(e);
        return e.result==='W';
    });
    if(found){
        return found.year
    }else{
        return undefined;
    }

}