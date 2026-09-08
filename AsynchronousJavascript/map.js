//Map -> A Map stores data in key-value pairs.
let info = new Map(); //creates map
//here in map, .set is used to add values
info.set("Name", "Neha Mishra");
info.set("isEmployed", "true");
info.set("Location", "Ghaziabad");
console.log(info);
//output :
// Map(3) {
//   'Name' => 'Neha Mishra',
//   'isEmployed' => 'true',
//   'Location' => 'Ghaziabad'
// }

//get -> used to get the value associated with the key
let getInfo = info.get("Location");
console.log(getInfo); //Ghaziabad

//has -> checkes whether a key exists
let exists = info.has("Name");
console.log(exists); //true

//delete -> deletes key value pair
let del = info.delete("isEmployed");
console.log(del); //true, why?
console.log(info); //Map(2) { 'Name' => 'Neha Mishra', 'Location' => 'Ghaziabad' }

//size 
console.log(info.size); //2

//looping through map
for (let [Key, value] of info) {
    console.log("Key,Value:",Key, value); //Key,Value : Name Neha Mishra
}                            //Key,Value : Location Ghaziabad

for (let [key] of info){
    console.log("Key :",key); //Key : Name
}                             //Key : Location

for (let [value] of info){
    console.log("Value :",value); //Value : Name
}                                 //Value : Location
