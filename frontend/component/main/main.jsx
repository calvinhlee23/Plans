import React from 'react';
import Side from './side/side';
import Map from './map/map';
import CurrentUserEvents from './cu_events/cu_events';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isLogginedIn) {
      this.props.fetchCUComingEvents();
    }
  }
  render() {
    if (this.props.isLogginedIn) {
      return(
        <main>
        <h1>Main</h1>
        <Side/>
        <Map/>
        <CurrentUserEvents cuEvents = {this.props.cuEvents}/>
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
