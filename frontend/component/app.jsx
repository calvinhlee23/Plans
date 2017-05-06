import React from 'react';
import MenubarContainer from './menu/menubar_container.jsx';

export class Test extends React.Component {
  render() {
    return (<div>hello this is the first basic page of Plans!</div>);
  }
}

const App = ({children}) => (
  <div>
  <MenubarContainer/>
  {children}
  </div>
);

export default App;
