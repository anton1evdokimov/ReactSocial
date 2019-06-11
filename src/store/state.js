import postReducer from './postReducer'
import messageReducer from './messageReducer'

let store = {
        _state: {
                pageProfile: {
                        items: [
                                { text: "New text_items1", countLike: 1, id: 1 },
                                { text: "New text_items2", countLike: 1, id: 2 },
                                { text: 'New text_items3', countLike: 1, id: 3 },
                        ],
                        newPostContent: "20.05.2019 Господи, благослови"
                },
                pageMessage: {
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
        },
        _beginSubscriber() {                
        },

        subscribe(func) {
                this._beginSubscriber = func;
        },
        getState() {
                return this._state;
        },
        addItems() {

        },
        updateNewPost(text) {
        },
        dispatch(action) {
                this._state.pageProfile = postReducer(this._state.pageProfile, action);
                this._state.pageMessage = messageReducer(this._state.pageMessage, action);
                this._beginSubscriber(this._state);
        },
}

export default store;