import {connect} from 'react-redux';
import {createEvent} from '../../action/event_actions';
import EventForm from './event_form';
const mapStateToProps = (state) => ({
  isLogginedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createEvent: (event) => {dispatch(createEvent(event))}
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
