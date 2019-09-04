import Messages from './Messages'
import { updateNwMsActionCreator, addMsActionCreator } from "../../store/messageReducer"
import { connect } from "react-redux";

let mapStateToProps = state => ({ items: state.messagePage });

let mapDispatchToProps = dispatch => (
    {
        updateMessage: value => dispatch(updateNwMsActionCreator(value)),
        addMessage: () => dispatch(addMsActionCreator())
    }
);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer