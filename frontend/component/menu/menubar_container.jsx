import {connect} from 'react-redux';
import {logout} from '../../action/session_actions';
import Menubar from './menubar';

const mapStateToProps = (state) => ({
  isLogginedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) =>  ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
