import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UserOn = ({ user, component: Component, ...rest }) => {
    return(
        <Route
            { ...rest }
            render={ props => user.email ? <Component {...props} /> : <Redirect to="/" /> }
        />
    );
};

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps)(UserOn);