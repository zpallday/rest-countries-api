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
      <section className="h-full max-w-xs overflow-hidden rounded shadow-sm bg-primary">
        { this.state.persons.map(char => <Card> 
          <div className="h-48">
        <div className="object-fill w-full h-full"><Image src={char.flag}/></div>
        </div>
       <div className="px-6 py-4">
        <Card.Content> 
        <div className='mb-2 text-xl font-bold'>
        <Card.Header>{char.name}</Card.Header>
        </div>
        <ul>
        <li><span className="font-bold"><p>Population:</p></span><Card.Meta>{char.population.toLocaleString()}</Card.Meta></li>
        <li><span className="font-bold"></span><p>Region:</p><Card.Meta>{char.region}</Card.Meta></li>
        <li><span className="font-bold"></span><p>Capital:</p><Card.Description>{char.capital}</Card.Description></li>
        </ul>
        </Card.Content> 
        </div>
  </Card> )}
      </section>
    

    )

  }

}

