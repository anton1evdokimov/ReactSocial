import React from "react";
import st from './Profile.module.css'

export default class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);      
        this.state = {
            editMode: false,
            text: localStorage.getItem('status') || "1" ,
            status: {}
        }
    }

    setEditMode = () => {
        let attach = [1, 2, 3, 4, 5, 8, 9];

        this.setState(function (prevState) {
            return {
                editMode: true,
                status: {
                    ...prevState.status,
                    attach: {
                        ...prevState.status.attach, attach
                    }
                }
            }
        }, console.log(this.state));
    }
    resetEditMode = () => {
        this.setState({ editMode: false });
        localStorage.setItem('status', this.state.text);
    }
   
    onInput = e => {
        this.setState({ text: e.currentTarget.value });
    }
    render() {
        return <>
            {
                this.state.editMode ?
                    <input type="text" value={this.state.text} onBlur={this.resetEditMode} onInput={this.onInput}
                        autoFocus={true} onChange={this.onInput} className={st.statusInput} />
                    :
                    <div className={st.statusLabel} onClick={this.setEditMode}>
                        Мой статус: <span>{this.state.text}</span>
                    </div>
            }
        </>
    }
}