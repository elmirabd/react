import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


function UserOn(props) {

    if (Object.keys(props.user).length !== 0) {
        return(
            <Route {...props} component={props.component} />
        )
    }

    return <Redirect to="/" />;
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(UserOn)
