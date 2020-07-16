import React from 'react';
import cookie from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
    const token = cookie.get('token');
    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { form: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default AuthRoute;