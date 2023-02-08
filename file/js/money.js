const dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn');

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    if (Number(value) === 0) 
    {
        swal("Sorry!", "Please check the Missing fields!", "error");
    }else
    {
        const depositValue = Number(deposit.innerText) + Number(value);
        const balanceValue = Number(balance.innerText) + Number(value);
        deposit.innerText = depositValue;
        balance.innerText = balanceValue;
        depositInput.value = '';
        swal("Thank You!", "Payment has been done successfully!", "success");
    }
})


withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0) 
    {
        swal("Sorry!", "Please check the Missing fields!", "error");
    } else if (Number(value) > Number(balance.innerText)) 
    {
        swal("Sorry!", "Low account Balance", "warning");
    } else 
    {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
        swal("Thank You!", "Payment has been done successfully!", "success");
    }
})
