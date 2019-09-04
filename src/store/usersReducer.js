import { usersAPI, followAPI } from "../api/api";

const FOLLOW = "FOLOOW";
const UNFOLLOW = "UNFOLOOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_FOLLOW_PROGRESS = "SET_IS_FOLLOW_PROGRESS";

export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const selectedPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalSize = size => ({ type: SET_TOTAL_COUNT, size });
export const setIsFetching = isFetching => ({ type: SET_IS_FETCHING, isFetching });
export const setFollowingProgress = (isFollowing, id) => ({ type: SET_IS_FOLLOW_PROGRESS, isFollowing, id });

const initState = {
        users: [],
        pageSize: 5,
        totalSize: 0,
        selectedPage: 1,
        isFetching: false,
        followingInProgress: []
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
                case SET_IS_FOLLOW_PROGRESS: {
                        return {
                                ...state,
                                followingInProgress: action.isFollowing ?
                                        [...state.followingInProgress, action.id] :
                                        state.followingInProgress.filter(id => id !== action.id)
                        };
                }
                default: return state;
        }
}

export const getUsersTC = (currentPage, pageSize) => (dispatch) => {
        dispatch(setIsFetching(true));
        if (currentPage) {
                dispatch(selectedPage(currentPage));
        }
        usersAPI.getUsers(currentPage, pageSize).then(res => {
                dispatch(setUsers(res.items));
                dispatch(setTotalSize(res.totalCount));
                dispatch(setIsFetching(false))
        })
}

export const follow = (id) => (dispatch) => {

        dispatch(setFollowingProgress(true, id));
        followAPI.follow(id).then(result => {
                if (result === 0) {
                        dispatch(followSuccess(id))
                }
                dispatch(setFollowingProgress(false, id));
        });
}

export const unfollow = (id) => (dispatch) => {
        dispatch(setFollowingProgress(true, id));
        followAPI.unfollow(id).then(result => {
                if (result === 0) {
                        dispatch(unfollowSuccess(id))
                }
                dispatch(setFollowingProgress(false, id));
        })
}

export default usersReducer;