document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositorField = document.getElementById('deposite-field');
    const newDepositString = depositorField.value;
    const newDeposit = parseFloat(newDepositString); //string to number convertion
    
    // current deposit amount
    //for non input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement= document.getElementById('deposite-total');
    const previousDepositTotalString = depositeTotalElement.innerText;
    const  previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);

    const currentDepositeTotal = previousDepositTotal + newDeposit;
    //set the total current deposit
    depositeTotalElement.innerText = currentDepositeTotal;


    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //current balance total
    const currentBalanceTotal = previousBalanceTotal + newDeposit;
    //set the current balance total
    balanceTotalElement.innerText = currentBalanceTotal;




    //clear the deposite field
    depositorField.value = '';

    

    
})