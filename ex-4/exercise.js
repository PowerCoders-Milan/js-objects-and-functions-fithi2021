// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
 
}     



window.alert(calculate_age(new Date(1992,4,17)));
//console.log(calculate_age(new Date(1962, 1, 1)));
//console.log(calculate_age(new Date(1992,4,17)));

