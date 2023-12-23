
export const nameValidator = (name) =>{
    if(name?.length  < 3) return "Name length must be greater that 3";
    return null;
}
export const emailValidator = (email) =>{
    if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) return "Email is invalid";
    return null;
}
export const PasswordValidator = (password) =>{
    if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{5,}$/.test(password))) return "Password is invalid";
    return null;
}