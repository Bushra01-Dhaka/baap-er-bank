// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2
    const withdrawFeild = document.getElementById('withdraw-field');
    const previousWithdrawString = withdrawFeild.value;
    const previousWithdraw = parseFloat(previousWithdrawString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //get current withdraw total
    const currentWithdrawTotal = previousWithdraw + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //get current total balance
    const currentBalanceTotal = previousBalanceTotal - previousWithdraw;
    //set the current balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    //clear the withdraw field
    withdrawFeild.value = '';

    if(previousWithdraw  > previousBalanceTotal)
    {
        alert('Sorry!!!!!!! You cannot withdraw more than your balance.');
        balanceTotalElement.innerText = 0;

    }
    

})