//Business Loan Application
function fullnameTest(fullname)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(fullname);  
}
function phonenoTest(phone) 
{
    let regex = /^[(0/91)]?[7-9][0-9]{9}$/;
    return regex.test(phone);
}
function addressTest(address)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(address);  
}
function branchTest(branch)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(branch);  
}
function businessnameTest(business)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(business);  
}
function amountTest(amount)
{
    let regex = /^[0-9]{1,10}$/;
    return regex.test(amount);  
}
function loantenureTest(loan)
{
    let regex = /^[0-9]{1,2}$/;
    return regex.test(loan);  
}
//Create Account
function firstnameTest(firstname)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(firstname);  
}
function lastnameTest(lastname)
{
    let regex = /^[a-zA-Z+ .]{2,30}$/;
    return regex.test(lastname);  
}
function phonenoTest(phone) 
{
    let regex = /^[(0/91)]?[7-9][0-9]{9}$/;
    return regex.test(phone);
}
function emailTest(email) 
{
    let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]$/;
    return regex.test(email);
}
function addressTest(address)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(address);  
}
function passwordTest(password) 
{
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password);
}
function confirmpasswordTest(confirmpassword) 
{
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(confirmpassword);
}

//Forgot Password
function customeridTest(customer)
{
    let regex = /^[0-9]{1,10}$/;
    return regex.test(customer);  
}
function emailTest(email) 
{
    let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]$/;
    return regex.test(email);
}

//Home Loan
function nameTest(name)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(name);  
}
function phonenoTest(phone) 
{
    let regex = /^[(0/91)]?[7-9][0-9]{9}$/;
    return regex.test(phone);
}
function addressTest(address)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(address);  
}
function branchTest(branch)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(branch);  
}
function amountTest(amount)
{
    let regex = /^[0-9]{1,10}$/;
    return regex.test(amount);  
}
function loantenureTest(loan)
{
    let regex = /^[0-9]{1,2}$/;
    return regex.test(loan);  
}

//Apply for Loan on Credit Card   
function nameTest(name)
{
    let regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(name);  
}
function phonenoTest(phone) 
{
    let regex = /^[(0/91)]?[7-9][0-9]{9}$/;
    return regex.test(phone);
}
function cardtest(card) 
{
    let regex = /^[0-9]{16}$/;
    return regex.test(card);
}
function pinTest(password) 
{
    let regex = /^[0-9]{1,10}$/;
    return regex.test(password);
}
function passwordTest(password) 
{
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(password);
}
