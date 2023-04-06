export function addition(a,b){
    return a + b;
}

export function subtraction(a,b){
    return a - b;
}

export function power(a,b){
    if (b < 0){
        b = 0;
    }
    if(b == 0){
        return 1;
    }
    let result = a;
    for(let i = 0; i <= b; i++)
    {
        result = result * a;
    }
    return result;
}