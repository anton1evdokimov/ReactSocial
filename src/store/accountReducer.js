const SET_ACCOUNT = "SET_ACCOUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";

export const setAccount = (id, email, login) => ({ type: SET_ACCOUNT, id, email, login });

export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });

const initState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isFetching: false        
};

const accountReducer = (state = initState, action) => {
        switch (action.type) {
                case SET_ACCOUNT: {
                        return {
                                ...state,
                                id:action.id,
                                email:action.email,
                                login: action.login,
                                isAuth: true
                        };
                }               
                case SET_IS_FETCHING: {
                        return {
                                ...state,
                                isFetching: action.isFetching
                        };
                }
                
                default: return state;
        }
}

export default accountReducer;