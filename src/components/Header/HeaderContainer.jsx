import React from "react"
import Header from "./Header";
import { connect } from "react-redux";
import { setAccount } from '../../store/accountReducer'
import * as axios from 'axios'

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                withCredentials: true
            }
        ).then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login}=res.data.data;
                this.props.setAccount(id, email, login);   //this.props.setIsFetching(false);
            }
        });
    }
    render() { debugger; return <Header {...this.props} /> }
}

let mapStateToProps = state => ({ account: state.account });

export default connect(mapStateToProps, { setAccount })(HeaderContainer);