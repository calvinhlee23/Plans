import React from 'react';

class Test extends React.Component {
  render() {
    return (<div>hello this is the first basic page of Plans!</div>);
  }
}

const App = ({children}) => (
  <div>
  <Test/>
  {children}
  </div>
);

export default App;
