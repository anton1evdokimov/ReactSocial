const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPsActionCreator = () => ({ type: ADD_POST });
export const updateNwPsActionCreator = text => ({ type: UPDATE_NEW_POST, text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

const initState = {
        items: [
                { text: "New text_items1", countLike: 1, id: 1 },
                { text: "New text_items2", countLike: 1, id: 2 },
                { text: 'New text_items3', countLike: 1, id: 3 },
        ],
        newPostContent: "25.05.2019 Господи, благослови",
        profile: null
};

const postReducer = (state = initState, action) => {
        switch (action.type) {
                case ADD_POST: {
                        const id = Math.min.apply(null, state.items.map(i => i.id));
                        let newItem = {
                                text: state.newPostContent,
                                countLike: 1,
                                id: id
                        }
                        return {
                                ...state,
                                newPostContent: '',
                                items: [newItem, ...state.items]
                        };
                }
                case UPDATE_NEW_POST: {
                        return { ...state, newPostContent: action.text };
                }
                case SET_USER_PROFILE: {
                        return {
                                ...state,
                                profile: action.profile
                        };
                }
                default: return state;
        }
}

export default postReducer;