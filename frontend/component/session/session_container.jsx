import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../action/session_actions';

const mapStateToProps = (state) => ({
  isLogginedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (type, user) => {
      console.log(type);
      console.log(login(type, user));
      dispatch(login(type, user))
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
