console.log("script connected")
let dob = document.getElementById("dob");
function calcAge(){
    let userInput = document.getElementById("dob").value;

    

    let date = new Date(userInput);
    let monthDiff = Date.now() - date.getTime();
    let ageDate = new Date(monthDiff);
    var year = ageDate.getUTCFullYear(); 
    var age = Math.abs(year - 1970); 
    let text = ""

    if(userInput == ""){
        text = "Please select date of birth first.";
        document.getElementById("result").innerText = text;
        document.getElementById("result").style.color = "red";
    }else{
        text = "Your age is " + age + " years old";
        document.getElementById("result").innerText=  text;
        document.getElementById("result").style.color = "black";
    } 

    
    document.getElementById("dob").value = "";   
}