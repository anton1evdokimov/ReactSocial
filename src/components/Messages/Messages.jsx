import React from "react"
import st from './Messages.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Messages = props => {

    let updateNewMessage = e => {      
        props.updateMessage(e.currentTarget.value);
    }
    let addMessage = () => {
        props.addMessage();
    }
    return <div className={`${st.main} content`}>
        <div className={st.items}>
            {props.items.dialogs.map(item => <Dialog name={item.name} key={item.id} />)}
        </div>
        <div className={st.messages}>
            <div className={st.add}>
                <textarea className={st.addMessage}
                    placeholder="Введите текст"
                    value={props.items.newMessageContent}
                    onChange={updateNewMessage} />
                <button className={st.addButton} onClick={addMessage} >Добавить запись</button>
            </div>
            {props.items.messages.map(item => <Message content={item.content} key={item.id} />)}
        </div>
    </div>;
}

export default Messages