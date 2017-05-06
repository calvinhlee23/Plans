import React from 'react';
import Menubar from './menu/menubar.jsx';

export class Test extends React.Component {
  render() {
    return (<div>hello this is the first basic page of Plans!</div>);
  }
}

const App = ({children}) => (
  <div>
  <Menubar/>
  {children}
  </div>
);

export default App;
