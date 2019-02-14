import React from 'react';

const ListItem = (props) => {
    const {onSelect, details: {general: {firstName, lastName, avatar}, job: {company}}} = props;
    return (
        <div className="listItem" onClick={onSelect}>
            <div className="avatar">
                <img src={avatar}/>
            </div>
            <div className="listHead">
                <h4>
                    {firstName + ' ' + lastName}
                </h4>
                <div>
                    {company}
                </div>
            </div>
        </div>
    )
};

export default ListItem;
