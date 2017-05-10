import {connect} from 'react-redux';

import Main from './main';

const mapStateToProps = (state) =>({
  isLogginedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
