import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


function UserOff(props) {

    if (Object.keys(props.user).length !== 0) {

        return(
            <Redirect to="/chat" />
        )
    }

    return <Route {...props} component={props.component} />;
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(UserOff)
