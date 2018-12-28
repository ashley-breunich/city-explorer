import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        apiURL: "https://city-explorer-backend.herokuapp.com",
        city: ""
      };
    }

    handleDynamicWords = event => {
        let words = event.target.value;
        this.setState({ city: words });
      };

    fetchCityData = event => {
      event.preventDefault();
    //   let cityName = event.target.value;
    //   console.log(cityName);
    //   this.setState({ city: cityName });
      console.log(this.state.city);
    };
  
    render() {
      return (
        <React.Fragment>
          <main>
              <form id="search-form">
              <label>Search for a location</label>
              <input onChange={this.handleDynamicWords} type="text" name="search" id="input-search" placeholder="Enter a location here"></input>
              <button className="submit" onClick={this.fetchCityData}>
              Explore
            </button>
            </form>
          </main>
        </React.Fragment>
      );
    }
  }
  

export default Form;