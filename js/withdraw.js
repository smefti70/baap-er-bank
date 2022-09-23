//Step-1: Add Event Handler to the withdraw Button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //Step-2: Get the withdraw amount from the withdraw Input Field
    let withdrawField = document.getElementById('withdraw-field');
    let newwithdrawAmount = withdrawField.value;

    if (isNaN(newwithdrawAmount) || newwithdrawAmount == '') {
        alert('Please provide an amount in number!');
    }

    else {
        //Step-3: Get the previous withdraw total 
        let withdrawTotalField = document.getElementById('withdraw-total');
        let prevwithdrawTotal = withdrawTotalField.innerText;

        //Step-4: Get the pervious Balance Amount
        let balanceTotalField = document.getElementById('balance-total');
        let prevTotalBalance = balanceTotalField.innerText;

        if (parseFloat(prevTotalBalance) <= 0 || parseFloat(newwithdrawAmount) > parseFloat(prevTotalBalance)) {
            alert('Insufficient Balance!')
        }
        else {
            //Step-5: Update the Total withdraw Amount
            withdrawTotalField.innerText = parseFloat(prevwithdrawTotal) + parseFloat(newwithdrawAmount);

            //Step-6: Update the Total Balance Amount
            balanceTotalField.innerText = parseFloat(prevTotalBalance) - parseFloat(newwithdrawAmount);
        }

    }


    //Step-7: Clear the withdraw field
    withdrawField.value = '';

})