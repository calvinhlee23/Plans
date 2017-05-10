import React from 'react';
import {hashHistory} from 'react-router'

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange() {

  }

  handleClick() {

  }

  render() {
    return (
    <form className = "event-form">
    <h1>THIS IS EVENT FORM</h1>
    <table>
    <tbody>
      <tr>
        <th>Title:</th>
        <th><input onChange = {this.handleChange} value = {this.state.title}></input></th>
      </tr>
      <tr>
        <th>Description:</th>
        <th><input onChange = {this.handleChange} value = {this.state.description}/></th>
      </tr>
      <tr>
        <th>Date:</th>
        <th><input onChange = {this.handleChange} value = {this.state.date} placeholder = {"mm/dd/year"}/></th>
      </tr>
      <tr>
        <th>Time:</th>
        <th><input onChange = {this.handleChange} value = {this.state.time}/></th>
      </tr>
      <tr>
        <th>Location:</th>
        <th><input onChange = {this.handleChange} value = {this.state.location}/></th>
      </tr>
      <tr>
        <th><button value = "/" onClick = {()=>{hashHistory.push("/")}}>Cancel</button></th>
          <th><button value = "submit" onClick = {this.handleClick}>Submit</button></th>
      </tr>
    </tbody>
    </table>
    </form>);
  }
}
