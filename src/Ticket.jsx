import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
    var styleSheet= {
        color: 'slategrey'
    }
    return(
        <div style={styleSheet}>
            <h3>{props.location} - {props.names}</h3>
            <p>{props.issue}</p>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string,
    location: PropTypes.string,
    issue: PropTypes.string
};

export default Ticket;