// web/static/js/containers/authenticated.js

import React                  from 'react';
import { connect }            from 'react-redux';
import { routerActions }      from 'react-router-redux';

class AuthenticatedContainer extends React.Component {
    componentDidMount() {
        const { dispatch, currentUser } = this.props;

        if (localStorage.getItem('phoenixAuthToken')) {
            dispatch(Actions.currentUser());
        } else {
            dispatch(routerActions.push('/sign_up'));
        }
    }

    render() {
        const { currentUser, dispatch, boards, socket, currentBoard } = this.props;

        if (!currentUser) return false;

        return (
            <div id="authentication_container" className="application-container">
            <Header/>

            <div className='main-container'>
            {this.props.children}
    </div>
        </div>
    );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
