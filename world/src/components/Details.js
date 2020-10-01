import React from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react'; 
import { Link } from "react-router-dom";


export default class Details extends React.Component {
  state = {
    the: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const the = res.data;
        this.setState({ the });
      })
  };


  render() {
    
    return (
      <section className="container">
        { this.state.the.map(char => <Card> 
        <div className="flags">
       <Image src={char.flag}/> 
       </div>
        <Card.Content> 
        <div className='name'>
        <Card.Header>{char.name}</Card.Header>
        </div>

        <div className="pop">
        <p>Native Name:</p>
        <Card.Meta>{char.nativeName}</Card.Meta> 
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

        <div className="cap">
        <p>Top Level Domain:</p>
        <Card.Description>{char.topLevelDomain}</Card.Description> 
        </div>

        <div className="cap">
        <p>Top Level Domain:</p>
        <Card.Description>{char.currencies}</Card.Description> 
        </div>

        <div className="cap">
        <p>Top Level Domain:</p>
        <Card.Description>{char.languages}</Card.Description> 
        </div>

        <div className="cap">
        <p>Top Level Domain:</p>
        <Card.Description>{char.boarders}</Card.Description> 
        </div>

        </Card.Content> 
        <Link to="/World" className="btn btn-secondary">
                  Back
                </Link>
  </Card> )}
      </section>
    

    )

  }

}

