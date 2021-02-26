// write your JS here
// remember to always test in the browser
// to see if everything works correctly

// from the browser
function usr(){
    let noun = prompt("Enter the noun")
    let verb = prompt("Enter the verb")
    let adverb=  prompt("Enter the adverb")
    let adjective = prompt("Enter the adjective")
    
    window.alert( noun +" "+ verb+ " doing" +" "+adverb+ " "+ "and" +" "+ verb +" "+ adjective);
    
}
  document.getElementById("example").innerHTML  =   window.alert(usr());

/*

//from the console
function usr(){
    let noun = "Man";
    let verb = "is";
    let adverb=  "slowly"
    let adjective= "tall";
    
    console.log(noun + verb + adverb + adjective );
    
}
usr();
*/