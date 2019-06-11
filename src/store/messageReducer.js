const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export const addMsActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNwMsActionCreator = text => ({ type: UPDATE_NEW_MESSAGE, text });

const initState = {
        newMessageContent: '',
        dialogs: [
                { name: "Евдокимов Игорь", url: "", id: 1 },
                { name: "Евдокимов Игорь", url: "", id: 2 },
                { name: 'Евдокимов Игорь', url: "", id: 3 }
        ],
        messages: [
                { content: "text_items1", url: "", id: 1 },
                { content: "text_items2", url: "", id: 2 },
                { content: 'text_items3', url: "", id: 3 }
        ]
}

const messageReducer = (state = initState, action) => {
        switch (action.type) {
                case ADD_MESSAGE: {
                        const id = Math.min.apply(null, state.messages.map(i => i.id));
                        let newItem = {
                                content: state.newMessageContent,
                                url: '',
                                id: id
                        }
                        return {
                                ...state,
                                newMessageContent: '',
                                messages: [newItem, ...state.messages]
                        };
                }
                case UPDATE_NEW_MESSAGE: {
                        return {
                                ...state,
                                newMessageContent: action.text
                        };
                }
                default: return state;
        }
}

export default messageReducer;