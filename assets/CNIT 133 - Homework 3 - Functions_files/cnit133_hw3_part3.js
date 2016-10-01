console.log("cnit133_hw3_part3");


// determine whether a department-store customer has exceeded the credit limit on their charge account.

// Get the inputs

// a) Account number
// b) Balance at the beginning of the month
// c) Total of all items charged by this customer this month
// d) Total of all credits applied to this customer's account this month
// e) Allowed credit limit

var account,
    balance,
    newBalance,
    itemsTotal,
    creditsTotal,
    creditAllowed,
    creditAvailable,
    results;

function test(){
    account = $('#account').val();
    var test = parseFloat(account);
    console.log(test);
}

function getInput() {
    account = parseFloat($('#account').val());
    console.log(account.length);
    while (account === "undefined" || account === "" || account < 0 || isNaN(account )) {
        alert("Account Number are numbers only")
        account = parseFloat(prompt("Account Number - Please enter your account number"));
    }
    $('#account').val(account);

    balance = parseFloat($('#balance').val());
    while (balance === "undefined" || balance === "" || balance < 0 || isNaN(balance)) {
        balance = parseFloat(prompt("Initial Balance - Please enter a number greater or equal 0"));
    }
    $('#balance').val(balance);

    itemsTotal = parseFloat($('#itemsTotal').val());
    while (itemsTotal === "undefined" || itemsTotal === "" || itemsTotal < 0 || isNaN(itemsTotal)) {
        itemsTotal = parseFloat(prompt("Total of all items - Please enter a number greater or equal 0"));
    }
    $('#itemsTotal').val(itemsTotal);

    creditsTotal = parseFloat($('#creditsTotal').val());
    while (creditsTotal === "undefined" || creditsTotal === "" || creditsTotal < 0 || isNaN(creditsTotal)) {
        creditsTotal = parseFloat(prompt("Total of all credits applied - Please enter a number greater or equal 0"));
    }
    $('#creditsTotal').val(creditsTotal);

    creditAllowed = parseFloat($('#creditAllowed').val());
    while (creditAllowed === "undefined" || creditAllowed === "" || creditAllowed < 0 || isNaN(creditAllowed)) {
        creditAllowed = parseFloat(prompt("Allowed credit limit - Please enter a number greater or equal 0"));
    }
    $('#creditAllowed').val(creditAllowed);
}

function calculateNewBalance(){
    newBalance = balance + itemsTotal - creditsTotal;
    return newBalance;
}

function checkCredit(){
    
    creditAvailable = newBalance - creditAllowed;

    if(newBalance < creditAllowed){
        return "Credit available: " +  creditAvailable;   
    } else {
        return "Credit limit exceeded by: " + Math.abs(creditAvailable);
    }

    
}



function outputResults(){

     results = "Credit Account Summary Account Number: " + account + "\n";
     results += "Credit Limit: " + creditAllowed + "\n";
     results += "Balance at beginning of month: " + balance + "\n";
     results += "Total amount charged this month: " + itemsTotal + "\n";
     results += "Total amount of credits this month: " + creditsTotal + "\n";
     results += "Summary - The new balance is: " + newBalance + "\n";
     results += checkCredit();

     return results;
}

function submitForm(){
    getInput();
}

function submitForm(){
    getInput();
    calculateNewBalance();
    checkCredit();

    $("#output").val(outputResults());
}
//form input[type="reset"] {


// Calculate the new balance (which equals beginning balance + charges – credits), 
// and determine whether the new balance exceeds the customer's credit limit and by how much. 
//Then display in a form textarea, the new balance and whether the customer has exceeded 
// their credit limit and by how much, by displaying the message “Credit limit exceeded by X”,
// where X is the amount the credit limit was exceeded. If the customer is at or under their 
// credit limit then display their new balance and the message "Credit available is X", 
// where X is the amount of their available credit.



// Calculate the new balance
