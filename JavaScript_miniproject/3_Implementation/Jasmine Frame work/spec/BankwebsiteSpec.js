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
