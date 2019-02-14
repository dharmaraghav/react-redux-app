import React, {Component} from 'react';
import './index.css';

class UserDetails extends Component {
    render() {
        const {details: {general: {firstName, lastName, avatar}, job: {company, title}, contact: {email, phone}, address: {street, city, zipCode, country}}} = this.props;
        return (
            <div className="UserDetails">
                <div className="user">
                    <div className="userImage">
                        <img src={avatar}/>
                    </div>
                    <h3>
                        {firstName + ' ' + lastName}
                    </h3>
                </div>
                <div className="detailsSection">
                    <h4>Job : </h4>
                   <div className="wrapper">
                       <div>
                           Company: <br/>
                           title
                       </div>
                       <div>
                           {company} <br/>
                           {title}
                       </div>
                   </div>
                    <h4>Contact : </h4>
                    <div className="wrapper">
                        <div>
                            Email: <br/>
                            Phone
                        </div>
                        <div>
                            {email} <br/>
                             {phone}
                        </div>
                    </div>
                    <h4>Address : </h4>
                    <div className="wrapper">
                        <div>
                            Street: <br/>
                            City: <br/>
                            Zip Code: <br/>
                            Country
                        </div>
                        <div>
                            {street} <br/>
                            {city} <br/>
                            {zipCode} <br/>
                            {country}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetails;
