import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

let mapStateToProps = state => ({
    auth: state.account.isAuth
});

export default (Comment) => {
    class withRedirect extends React.Component {
        render() {
            if (this.props.auth) return <Comment {...this.props} />
            else return <Redirect to='/login' />
        }
    }
return connect(mapStateToProps)(withRedirect);
}