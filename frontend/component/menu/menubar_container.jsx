import {connect} from 'react-redux';

import Menubar from './menubar';

const mapStateToProps = (state) => ({
  isLogginedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = () =>  ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
