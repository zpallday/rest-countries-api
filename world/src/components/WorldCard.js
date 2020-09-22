import React from 'react'; 
import { Card, Image } from 'semantic-ui-react'; 

export default function WorldCard({ char }) { 
 return ( 
  <Card> 
      <Image src={char.flag} wrapped ui={false} /> 
        <Card.Content> 
        <Card.Header>{char.population}</Card.Header> 
        <Card.Meta>{char.region}</Card.Meta>
        <Card.Description>{char.capital}</Card.Description> 
        </Card.Content> 
  </Card> 
); 


} 