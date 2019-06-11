const FOLLOW = "FOLOOW";
const UNFOLLOW = "UNFOLOOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const selectedPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalSize = size => ({ type: SET_TOTAL_COUNT, size });
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });

const initState = {
        users: [],
        pageSize: 5,
        totalSize: 0,
        selectedPage: 1,
        isFetching: false        
};

const usersReducer = (state = initState, action) => {
        switch (action.type) {
                case FOLLOW: {
                        return {
                                ...state,
                                users: state.users.map(u => {
                                        if (u.id === action.userId) {
                                                return { ...u, followed: true }
                                        }
                                        return u;
                                })
                        };
                }
                case UNFOLLOW: {
                        return {
                                ...state,
                                users: state.users.map(u => {
                                        if (u.id === action.userId) {
                                                return { ...u, followed: false }
                                        }
                                        return u;
                                })
                        };
                }
                case SET_USERS: {
                        return {
                                ...state,
                                users: [...action.users]
                        };
                }
                case SET_CURRENT_PAGE: {
                        return {
                                ...state,
                                selectedPage: action.page
                        };
                }
                case SET_TOTAL_COUNT: {
                        return {
                                ...state,
                                totalSize: action.size
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

export default usersReducer;