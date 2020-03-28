function latePayment(value, time, taxes){
    let newPayament = value + (value*(taxes/100)*time);
    return newPayament;
}