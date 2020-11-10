describe('Testing the Business Loan Application', ()=>{
    it("Check for Full Name", ()=>{
        const res = fullnameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485910");
        expect(res).toBeTruthy();
    })
    it("Check for Address", ()=>{
        const res = addressTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Branch", ()=>{
        const res = branchTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Business Name", ()=>{
        const res = businessnameTest("New Company");
        expect(res).toBeTruthy();
    })
    it("Check for Amount", ()=>{
        const res = amountTest("100000");
        expect(res).toBeTruthy();
    })
    it("Check for Loan Tenure", ()=>{
        const res = loantenureTest("5");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Create Account', ()=>{
    it("Check for First Name", ()=>{
        const res = firstnameTest("Harsha");
        expect(res).toBeTruthy();
    })
    it("Check for Last Name", ()=>{
        const res = lastnameTest("C.A");
        expect(res).toBeTruthy();
    })
    it("Check for Phone No.", ()=>{
        const res = phonenoTest("7996485901");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
    it("Check for Address", ()=>{
        const res = addressTest("Kolar");
        expect(res).toBeTruthy();
    })
    it("Check for Password", ()=>{
        const res = passwordTest("harsha@123");
        expect(res).toBeTruthy();
    })
    it("Check for Confirm Password", ()=>{
        const res = confirmpasswordTest("harsha@123");
        expect(res).toBeTruthy();
    })
});

describe('Testing the Forgot Password', ()=>{
    it("Check for Customer ID", ()=>{
        const res = customeridTest("2634");
        expect(res).toBeTruthy();
    })
    it("Check for E-mail Address", ()=>{
        const res = emailTest("harshaca@gmail.com");
        expect(res).toBeTruthy();
    })
});
