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
