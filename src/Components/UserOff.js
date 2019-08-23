import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UserOff = ({ user, component: Component, ...rest }) => {
    return (
        <Route
            { ...rest }
            render={ props => !user.email ? <Component {...props} /> : <Redirect to="/dashboard" /> }
        />
    )
};

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(UserOff);
