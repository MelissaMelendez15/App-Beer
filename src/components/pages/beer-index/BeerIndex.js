import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Table } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import './BeerIndex.css'

class BeerIndex extends Component {
    
    constructor() {
        super()
        this.state = { beer: undefined}
    }

    componentDidMount(){
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(beerArray => this.setState({beer: beerArray}))
        .catch(err => console.log(err))
    }
    
    render() {
        
        return(
           <Container fluid style= {{ width: '85%', paddingLeft: '7%'}}>

               {
               !this.state.beer ?
                 
               <div className="spinner-container"><Spinner animation="border" /></div>
               :
               
               <>
               
               <h1 className="textTable">Beer List</h1>
               
               <Table borderless>
                  {this.state.beer.map(beer => 
                      <tr>
                         <td> <img src={beer.image_url} alt={beer.name}/></td>
                         <td> <p>{beer.name}</p> </td>
                         <td> <p>{beer.tagline}</p> </td>
                         <td> <p>{beer.contributed_by}</p> </td>
                         <td> <Link to={`/details/${beer._id}`} style={{ display: 'block', textDecoration: 'none', color: 'white', fontSize: '.7em', marginLeft: '5%', backgroundColor: '#ffd041', borderRadius: '1px',  border: '1px solid white', margin:'40px auto', textAlign: 'center', letterSpacing: '1px', padding: '10px 0',  width: '120px' }} className="button small">Details</Link></td>
                   </tr>)}
               </Table>
               </>
            }
              
           
           </Container>
           
        )
    }

}





export default BeerIndex