import React, { Component } from 'react'
import CompanyRow from './CompanyRow'
import { Link } from 'react-router-dom';


export class CompaniesList extends Component {

  state = {
    displayAll: false
  }

  clickHandler = () => {
    console.log('click')
    this.setState((state) => ({
      displayAll: !this.state.displayAll
    }))
  }

  render() {
    //THIS IS THE LOGIC TO CALCULATE THE TOP 100
    const top100 = this.props.companies.sort((a, b) => {
      let aAvg = (a.diversity_total + a.growth_score + a.opportunity_score) / 3;
      let bAvg = (b.diversity_total + b.growth_score + b.opportunity_score) / 3;
      if (aAvg > bAvg) {
        return -1;
      }
      if (aAvg < bAvg) {
        return 1;
      }
      return 0;      
      }).splice(0, this.state.displayAll ? 100 : 10);
    
    
    return (
      
      <div >
        
        {top100.map((company) => (
          <Link to={`/companies/${company._id}`}>
            <CompanyRow company={company} />
          </Link>
        ))}

        {this.state.displayAll === false &&
          <button onClick={this.clickHandler} className="tw-text-imagineText tw-object-left">see more</button>}
        
        {this.state.displayAll === true &&
          <button onClick={this.clickHandler} className="tw-text-imagineText tw-object-left">see less</button>}
        
      </div>
    )
  }
}

export default CompaniesList
