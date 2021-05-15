import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart.js';


export default class CompanyDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      company: {},
      diversityScore: {},
      dataFetched: false
    };
  }
  
  getData = () => {
   
    axios.get(`/api/companies/${this.props.match.params.id}`)
    .then(response => {
      // console.log(response.data);
      this.setState({
        company: response.data,
        dataFetched: true
        // this unsets the flag when the data is available
        // dataRequested: false
      })
    })
    .catch(err => {
      console.log(err);
      if (err.response.status === 404) {
        this.setState({
          error: 'Not found 🤷‍♀️🤷‍♂️'
        })
      }
    })
}

componentDidMount() {
  this.getData();
}

componentDidUpdate(prevProps) {
  if (prevProps.company!== this.props.company) {


  render() {
    if(this.state.dataFetched) {
      console.log('CompanyDetails',this.state.company)
      return (
        
        <div>
           <h1>Name: {this.state.company.company_name}</h1>
           <Chart company={this.state.company} /> 
        </div>
      )
    } else {
      return(null);
    }

  }
}
