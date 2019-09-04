import React from "react"
import { connect } from "react-redux";
import Users from "./Users";
import { unfollow, follow, getUsersTC } from "../../store/usersReducer";
import Loader from "../common/Loader";
import withAuth from '../HOC/withAuth'
import { compose } from "C:/Users/Москва/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
class UsersContainer extends React.Component {
  //http://jsonplaceholder.typicode.com/users/
  componentDidMount = () => {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  clickPage = (page) => {
    this.props.getUsersTC(page, this.props.pageSize);
  }
  render() {  
    return <>
      {this.props.isFetching ? <Loader /> :
        <Users totalSize={this.props.totalSize}
          pageSize={this.props.pageSize}
          selectedPage={this.props.selectedPage}
          users={this.props.users}
          clickPage={this.clickPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />}
    </>;
  }
}

let mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalSize: state.usersPage.totalSize,
  selectedPage: state.usersPage.selectedPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default compose(
  connect(mapStateToProps, { follow, unfollow, getUsersTC }),
  withAuth
)( UsersContainer);
