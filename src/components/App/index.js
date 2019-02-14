import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';
import UserDetails from '../UserDetails'
import UserList from '../UserList'
import {getUserList, filterUserList, selectUser} from '../../store/UsersModule/ActionCreator';

class App extends Component {

    componentDidMount() {
        this.props.getUserList()
    }

    searchUser = (e) => {
        this.props.filterUserList(e.target.value)
    };

    render() {
        const {selectUser, UsersModule: {filteredUsersList, selectedUser}} = this.props;
        return (
            <div className="App">
                <UserList search={this.searchUser} list={filteredUsersList} selectUser={selectUser}/>
                {Object.keys(selectedUser).length ? <UserDetails details={selectedUser} /> : <div className="emptyDetails"> <p>Select user from left menu</p></div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {getUserList, filterUserList, selectUser})(App);
