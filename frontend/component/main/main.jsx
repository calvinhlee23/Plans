import React from 'react';
import Side from './side/side';
import Map from './map/map';
import CurrentUserEvents from './cu_events/cu_events';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.isLogginedIn) {
      return(
        <main>
        <h1>Main</h1>
        <Side/>
        <Map/>
        <CurrentUserEvents/>
        </main>
      );
    } else {
      return(
        <main>
        <h1>Main</h1>
        <Side/>
        <Map/>
        </main>
      );
    }
  }
};
