function redirectWithDelay() {
    const redirectUrl = 'none.html'; 
    const delay = 2000; 

    setTimeout(function() {
        window.location.href = redirectUrl;
    }, delay);
}

function validateinputs()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    event.preventDefault();



    if (username == "" || password == "") 
    {
        alert("Username and password must be filled out");
        return false;
    }



    var usernamePattern = /^[a-zA-Z]\w+$/;
    if (!usernamePattern.test(username)) 
    {
        document.getElementById("error").innerHTML = "Invalid Username";
        alert("Username must start with a letter and only contain letters, numbers and underscores")
        return false;
    }



   
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) 
    {
        document.getElementById("error").innerHTML = "Invalid Password";
        alert("Password must be at least 8 characters long and contain at least one letter,one number and one special character")
        return false;
    }


    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "Welcome to the site!";

    redirectWithDelay();
    return true;

    
}




function validatesignup()
{
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var gender = document.getElementById("genders").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dataofbirth").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;



    if (username == "" || password == "" || confirmpassword
        == "")
    {
        alert("Username and password must be filled out");
        return false;
    }


    var usernamePattern = /^[a-zA-Z]\w+$/;
    if (!usernamePattern.test(username)) 
    {
        document.getElementById("error").innerHTML = "Invalid Username";
        alert("Username must start with a letter and only contain letters, numbers and underscores")
        return false;
    }

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (!passwordPattern.test(password)) 
    {
        document.getElementById("error").innerHTML = "Invalid Password";
        alert("Password must be at least 8 characters long and contain at least one letter,one number and one special character")
        return false;
    }

    if (password != confirmpassword)
    {
        document.getElementById("error").innerHTML = "Passwords do not match";
        alert("Passwords do not match");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) 
    {
        document.getElementById("error").innerHTML = "Invalid Email";
        alert("Invalid Email");
        return false;
    }

    var phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) 
    {
        document.getElementById("error").innerHTML = "Invalid Phone Number";
        alert("Invalid Phone Number");
        return false;
    }

    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (dob == "")
    {
        document.getElementById("error").innerHTML = "Invalid Date of Birth";
        alert("Invalid Date of Birth");
        return false;
    }
    else if (age<18)
    {
        document.getElementById("error").innerHTML = "You must be 18 years old to sign up";
        alert("You must be 18 years old to sign up");
        return false;
    }

    if (address == "")
    {
        document.getElementById("error").innerHTML = "Invalid Address";
        alert("Invalid Address");
        return false;
    }

    if (country == "")
    {
        document.getElementById("error").innerHTML = "Invalid Country";
        alert("Invalid Country");
        return false;
    }


    if(gender == "Select")
    {
        document.getElementById("error").innerHTML = "Invalid Gender";
        alert("Please select one of the option");
        return false;
    }

    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "Sign up successful!. Welcome to the site!";
    redirectWithDelay();
    return true;





    

    
}

function resetbtn()
{
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
    document.getElementById(genders).value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("dataofbirth").value = "";
    document.getElementById("address").value = "";
    document.getElementById("country").value = "";

}