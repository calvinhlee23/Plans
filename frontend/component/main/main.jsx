import React from 'react';
import Side from './side/side';
import Map from './map/map';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main>
        <h1>Main</h1>
        <Side/>
        <Map/>
      </main>
    );
  }
};
