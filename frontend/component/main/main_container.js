import {connect} from 'react-redux';

import Main from './main';
import {fetchCUComingEvents} from '../../action/event_actions';

const mapStateToProps = (state) =>({
  isLogginedIn: Boolean(state.session.currentUser),
  cuEvents: state.cuEvents
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCUComingEvents: () => {dispatch(fetchCUComingEvents());}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
