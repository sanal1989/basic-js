module.exports = function createDreamTeam(members) {
  let result = [];
  if( members == null){
    return false;
  }else if(members =="undefined"){
    return false;
  }
  for(let i=0;i<members.length;i++){
    if(typeof members[i] == "string"){
    	if(members[i].trim().search("^[A-Za-z]")>-1){
      	result.push(members[i].trim().toUpperCase().charAt(0))
    	}
  	}
  }
  if(result.length>0){
    return result.sort().join("");
  }else{
    return false;
  }
  
};