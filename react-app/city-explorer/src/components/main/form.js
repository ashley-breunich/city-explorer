import React from 'react';
import superagent from 'superagent';
import Map from './map.js';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: 'get',
        body: {},
        city: ""
      };
    }

    handleDynamicWords = event => {
        let words = event.target.value;
        this.setState({ city: words });
      };

    fetchCityData = event => {
      event.preventDefault();
      console.log(this.state.city);
      let location = `https://city-explorer-backend.herokuapp.com/location`
      console.log(location);
      superagent(this.state.method, location)
      .query({data: this.state.city})
      .then( response => {
          let body = response.body;
          this.setState({body});
          console.log('state', this.state.body);
        //   displayMap(this.state.body);
      })
      .catch(error => {
          console.log(error);
      })
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
            <Map location={this.state.body}/>
          </main>
        </React.Fragment>
      );
    }
  }
  

export default Form;