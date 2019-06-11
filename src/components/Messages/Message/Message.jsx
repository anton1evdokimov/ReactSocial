import React from "react"
import st from './Message.module.css'

const Message = props => <div className={st.message}>{props.content}</div>

export default Message