import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    // Update the current time every second
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    // Extract hours, minutes, and seconds from the current time
    const hours = this.state.currentTime.getHours();
    const minutes = this.state.currentTime.getMinutes();
    const seconds = this.state.currentTime.getSeconds();

    return (
      <div>
        <h1>Current Time</h1>
        <p>
          {hours < 10 ? '0' + hours : hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
    );
  }
}

export default Clock;
