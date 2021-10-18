// buttonClick will get user data, and depending on input it will output how long
// the investment will take along with what they predicted gains will be

function buttonClick(){
    let name = document.getElementById("iName").value;
    let saving = document.getElementById("iSaving").value;
    let year = document.getElementById("iYear").value;

    if(name =="" || saving =="" || year ==""){
        alert("ERROR: Please enter a value for each of the fields...");
        return false;
    }
    document.writeln("Hey, " + name + ", you entered ");
    document.writeln("$"+saving + " and we will start with " + year + " years");
}




