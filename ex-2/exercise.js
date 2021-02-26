// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function fortune(partner_name, number_children, geographica_location,job_title){
    this.partner_name = partner_name;
    this.number_children = number_children;
    this.geographica_location = geographica_location;
    this.job_title = job_title;

    
}
 
/*
let p1 = new fortune("Gian",2,"Torinno","Computer programer");
console.log("You will be a"+" "+p1.job_title +" "+ "in"+ " "+ p1.geographica_location+","  +"and married to"+" "+
p1.partner_name +" "+ "with" +" "+p1.number_children+ " "+"kids");

let p2 = new fortune("Marry",4,"Milan","Doctor");
console.log("You will be a"+" "+p2.job_title +" "+ "in"+ " "+ p2.geographica_location+","  +"and married to"+" "+
p2.partner_name +" "+ "with" +" "+p2.number_children+ " "+"kids");
*/
let p1 = new fortune("Gian",2,"Torinno","Computer programer");
window.alert("You will be a"+" "+p1.job_title +" "+ "in"+ " "+ p1.geographica_location+","  +"and married to"+" "+
p1.partner_name +" "+ "with" +" "+p1.number_children+ " "+"kids");

