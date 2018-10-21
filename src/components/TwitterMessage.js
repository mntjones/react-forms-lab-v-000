import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      maxChars: 140};
  }
  
  handleText = event => () {
    this.setState ({
      value: event.target.value,
      maxChars: 140-event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="maxChars"/>
      </div>
    );
  }
}

export default TwitterMessage;
