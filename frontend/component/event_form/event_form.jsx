import React from 'react';
import {hashHistory} from 'react-router'

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      discription: null,
      time: null,
      location: null
    }
  }

  componentWillMount() {
    if (!this.props.isLogginedIn) {
      hashHistory.push("/");
      alert('please login before creating an event');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isLogginedIn) {
      hashHistory.push("/");
    }
  }

  render() {
    return (<form className = "event-form">HI THIS IS EVENT FORM</form>);
  }
}
