//Step-1: Add Event Handler to the Deposit Button
document.getElementById('deposit-btn').addEventListener('click', function () {

    //Step-2: Get the deposit amount from the Deposit Input Field
    let depositField = document.getElementById('deposit-field');
    let newDepositAmount = depositField.value;

    if (isNaN(newDepositAmount) || newDepositAmount == '') {
        alert('Please provide an amount in number!');
    }

    else {
        //Step-3: Get the previous deposit total 
        let depositTotalField = document.getElementById('deposit-total');
        let prevDepositTotal = depositTotalField.innerText;

        //Step-4: Update the Total Deposit Amount
        depositTotalField.innerText = parseFloat(prevDepositTotal) + parseFloat(newDepositAmount);

        //Step-5: Get the pervious Balance Amount
        let balanceTotalField = document.getElementById('balance-total');
        let prevTotalBalance = balanceTotalField.innerText;

        //Step-6: Update the Total Balance Amount
        balanceTotalField.innerText = parseFloat(prevTotalBalance) + parseFloat(newDepositAmount);
    }

    //Step-7: Clear the deposit field
    depositField.value = '';

})