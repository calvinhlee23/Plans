import {connect} from 'react-redux';

import Main from './main';
import {fetchCUComingEvents} from '../../action/event_actions';

const mapStateToProps = (state) =>({
  isLogginedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCUComingEvents: () => {disaptch(fetchCUComingEvents)}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
