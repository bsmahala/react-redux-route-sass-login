export const ValidateErrorSet = (condition, object, errorField, message) => {
    if(condition) {
        object[errorField] = message;
    }
}