import React from 'react';

export default class CurrentUserEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div className = "current-user-events">
            <h2>My Events</h2>
            <ul className = "current-user-events-list">
              <li>{JSON.stringify(this.props.cuEvents)}</li>
            </ul>
           </div>
         );
  }
}
