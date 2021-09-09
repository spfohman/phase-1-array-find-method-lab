

//const wins = record.find(function(element){
//	if (element.result==="W")
//		return record.year;
//});
//console.log(wins);

/*

function superbowlWin(win, finder){
    let result;
	for(let n of win){
		if(finder(n)===true){
			result = item;
			break;
		}
	}
	return result;
	
}
function isWin(result){
	return record.result==='W';
}
superbowlWin(record, isWin);

function superbowlWin(result){
	return record.result==='W';
}
console.log(record.find(isYear));

*/
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