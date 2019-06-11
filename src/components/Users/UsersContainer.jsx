import React from "react"
import { connect } from "react-redux";
import Users from "./Users";
import { unfollow, follow, setUsers, selectedPage, setTotalSize, setIsFetching } from "../../store/usersReducer";
import * as userAxios from "axios";
import Preloader from "../common/Preloader";

const axios = userAxios.create({});
class UsersContainer extends React.Component {
  //http://jsonplaceholder.typicode.com/users/
  componentDidMount = () => {
    this.props.setIsFetching(true);    
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalSize(res.data.totalCount);this.props.setIsFetching(false);
      });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  clickPage = (page) => {
    this.props.setIsFetching(true);
    this.props.selectPage(page);
    userAxios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => { 
      this.props.setUsers(res.data.items);this.props.setIsFetching(false); });
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> :
        <Users totalSize={this.props.totalSize}
          pageSize={this.props.pageSize}
          selectedPage={this.props.selectedPage}
          users={this.props.users}
          clickPage={this.clickPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}  />}
        </>;
  }
}

let mapStateToProps = state => {
return {
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalSize: state.usersPage.totalSize,
  selectedPage: state.usersPage.selectedPage,
  isFetching: state.usersPage.isFetching
}};

let mapDispatchToProps = dispatch => (
  {
    follow: userId => dispatch(follow(userId)),
    unfollow: userId => dispatch(unfollow(userId)),
    setUsers: users => dispatch(setUsers(users)),
    selectPage: page => dispatch(selectedPage(page)),
    setTotalSize: size => dispatch(setTotalSize(size)),
    setIsFetching: isFetching => dispatch(setIsFetching(isFetching))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

