import React, {Component} from 'react';
import ListItem from './ListItem'
import './index.css';

class UserList extends Component {
    onSelect = (e, index) => {
        this.props.selectUser(index)
    };

    render() {
        const {search, list} = this.props;
        return (
            <div className="UserList">
                <div className="searchSection">
                    <input onChange={search} placeholder="Search Client"/>
                </div>
                <div className="list">
                    {
                        list.map((value, index) => <ListItem key={index} details={value} onSelect={(e) => {this.onSelect(e, index)}} />)
                    }
                </div>
            </div>
        );
    }
}

export default UserList;
