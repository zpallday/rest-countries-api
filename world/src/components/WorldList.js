import React from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom'


export default class PersonList extends React.Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  };


  render() {
    
    return (
      <section className="container">
        { this.state.persons.map(char => <Card> 
        <div className="flags">
       <Image src={char.flag}/> 
       </div>
        <Card.Content> 
        <div className='name'>
        <Card.Header>{char.name}</Card.Header>
        </div>
        <div className="pop">
        <p>Population:</p>
        <Card.Meta>{char.population.toLocaleString()}</Card.Meta> 
        </div>
        <div className='reg'>
        <p>Region:</p>
        <Card.Meta>{char.region}</Card.Meta>
        </div>
        <div className="cap">
        <p>Capital:</p>
        <Card.Description>{char.capital}</Card.Description> 
        </div>
        </Card.Content> 
        {/* <div className="col-md-3">
                        <Link to={`/launch${flight_number}`} className="btn btn-secondary">Launch Details</Link>
                   </div> */}
  </Card> )}
      </section>
    

    )

  }

}

