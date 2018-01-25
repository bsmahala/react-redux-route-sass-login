import { LOGIN_ACTION } from '../actions/loginLogout_action';

export const loginData = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return action.payload;
        default:
            return state;
    }
}