import React from 'react';
import Menu from './menu.jsx';

class Test extends React.Component {
  render() {
    return (<div>hello this is the first basic page of Plans!</div>);
  }
}

const App = ({children}) => (
  <div>
  <Menu/>
  <Test/>
  {children}
  </div>
);

export default App;
