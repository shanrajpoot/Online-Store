                                        // Signup
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    }

    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    }
    
    function validateForm(){
    var returnval = true;
    clearErrors();
    
    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["name"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short!");
        returnval = false;
    }
    
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }
    
    var email = document.forms['myForm']["email"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long!");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["number"].value;
    if (phone.length != 10){
        seterror("number", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["pass"].value;
    if (password.length < 6){
    
        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    
    var cpassword = document.forms['myForm']["cpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    
    return returnval;
    }


                                        // Login
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
    }

    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
    }
    
    function validateForm(){
    var returnval = true;
    clearErrors();

    var email = document.forms['myForm']["email"].value;
    if (email.length>15){
        seterror( "email", "*Email length is too long!");
        returnval = false;
    }
    
    var password = document.forms['myForm']["pass"].value;
    if (password.length < 6){
    
        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    return returnval;
    }


                                        // Purchase-form
// function showAlert() {
//             // Get the values from the form inputs
//             var name = document.getElementById('name').value;
//             var email = document.getElementById('email').value;
//             var email = document.getElementById('address').value;
//             var email = document.getElementById('city').value;
//             var email = document.getElementById('zipcode').value;
//             var email = document.getElementById('password').value;

//             // Display an alert message with the form data
//             alert('Name: ' + name + '\nEmail: ' + email + '\nAddress: ' + address + '\nCity: ' + city + '\nZip Code: ' + zipcode + '\nPassword: ' + password);
//         }