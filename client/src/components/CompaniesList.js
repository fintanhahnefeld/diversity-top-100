import React, { Component } from 'react';
import companies from '../companies.json'


// console.log(companies[0].company_name);


export class CompaniesList extends Component {
  render() {

    const companyList = companies.map((company, index) => {
      return (
        <div key={index}>
            <h2>Name: {company.company_name}</h2>
            <p>Number of employees: {company.number_employees}</p>
          
            {/* if statement */}
            {company.diversity_score > 1000 && <p>Score: {company.diversity_score}</p>}
            <hr/>
        </div>
    )
    
    })

    return (
      <>
        {companyList}
      </>
    )
  }
}

export default CompaniesList
