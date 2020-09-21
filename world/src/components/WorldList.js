import React from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'; 
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(char => <Card> 
      <Image src={char.flag} wrapped ui={false} /> 
        <Card.Content> 
        <Card.Header>{char.population}</Card.Header> 
        <Card.Meta>{char.region}</Card.Meta> 
        <Card.Description>{char.capital}</Card.Description> 
        </Card.Content> 
  </Card> )}
      </ul>
    

    )

  }

}

