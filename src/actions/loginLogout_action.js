export const LOGIN_ACTION = "login_fetchLoginData";

export const fetchLogin = (inputLoginFromData, redirectFn) => {    
    return (dispatch)=>{
        // call api and set locahost item 
        localStorage.setItem('loginData', JSON.stringify(inputLoginFromData));
        dispatch({ type :LOGIN_ACTION , payload: inputLoginFromData});
        redirectFn('/admin');     
    };
}

export const logout = (callbackFn) => {
    return (dispatch)=>{
        // call api and set locahost item 
        localStorage.removeItem('loginData');
        dispatch({ type :LOGIN_ACTION , payload: {}});
        callbackFn('/login');     
    };
}


export const setLoginMemoryObject = (data) => {
    return { type :LOGIN_ACTION , payload: data};
}