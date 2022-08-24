export function checkEmailPattern(val:string){
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(val);
}

export function checkPasswordPattern(val:string){
    var pattern = /^(?=.*\d).{8,}$/;
    return pattern.test(val);
}

export function checkNamePattern(val:string){
    var pattern = /^[a-zA-Z ]{2,}$/;
    return pattern.test(val);
}
