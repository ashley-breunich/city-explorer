import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        city: ""
      };
    }
  
    handleDynamicWords = event => {
      let words = event.target.value;
      this.setState({ name: words });
    };
  
    handleSubmit = event => {
      event.preventDefault();
    };
  
    handleClick = event => {
      this.setState({ count: this.state.count + 1 });
    };
  
    render() {
      return (
        <React.Fragment>
          <main>
            <form id="url-form">
              <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
              <input type="text" value="https://city-explorer-backend.herokuapp.com" id = "back-end-url"></input>
              </form>
              <form>
              <input onChange={this.handleDynamicWords} />
            </form>
            <button className="submit" onClick={this.handleClick}>
              Explore
            </button>
          </main>
        </React.Fragment>
      );
    }
  }
  

export default Form;