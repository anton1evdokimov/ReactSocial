import React from "react"
import Header from "./Header";
import { connect } from "react-redux";
import { getAccount } from '../../store/accountReducer'
import { compose } from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAccount();
    }
    render() { return <Header {...this.props} /> }
}

let mapStateToProps = state => ({ account: state.account });

export default compose(
    connect(mapStateToProps, { getAccount })
)(HeaderContainer);