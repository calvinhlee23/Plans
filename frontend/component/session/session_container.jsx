import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout} from '../../action/session_actions';

const mapStateToProps = (state) => ({
  isLogginedIn: Boolean(state.session.currentUser),
  pp: state
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (type, user) => dispatch(login(type, user)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
