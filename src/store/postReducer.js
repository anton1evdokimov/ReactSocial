import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const addPsActionCreator = post => ({ type: ADD_POST, post });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setStatus = status => ({ type: SET_STATUS, status });

const initState = {
        items: [
                { text: "New text_items1", countLike: 1, id: 1 },
                { text: "New text_items2", countLike: 1, id: 2 },
                { text: 'New text_items3', countLike: 1, id: 3 },
        ],
        profile: null,
        status: ''
};

const postReducer = (state = initState, action) => {
        switch (action.type) {
                case ADD_POST: {
                        const id = Math.min.apply(null, state.items.map(i => i.id));
                        let newItem = {
                                text: action.post,
                                countLike: 1,
                                id: id
                        }
                        return {
                                ...state,
                                items: [newItem, ...state.items]
                        };
                }
                
                case SET_USER_PROFILE: {
                        return {
                                ...state,
                                profile: action.profile
                        };
                }
                case SET_STATUS: {
                        return {
                                ...state,
                                status: action.status
                        };
                }
                default: return state;
        }
}

export const getUserProfile = id => dispatch => {
        usersAPI.setProfile(id).then(data => {
                dispatch(setUserProfile(data));
        });
}

export const getUserStatus = id => dispatch => {
        profileAPI.getStatus(id).then(data => {
                debugger
                dispatch(setStatus(data));
        });
}

export const updateUserStatus = status => dispatch => {
        profileAPI.updateStatus(status).then(data => {
                if (data.resultCode == 0) {
                        dispatch(setStatus(status));
                }
        });
}

export default postReducer;