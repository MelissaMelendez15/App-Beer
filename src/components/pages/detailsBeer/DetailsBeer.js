import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import './DetailsBeer.css'

class DetailsBeer extends Component {
    
    constructor(props) {
        super(props)
        this.state = { beer: undefined}
    }
   
    componentDidMount(){
       
        const beerId = this.props.match.params.beerId

        console.log(this.props.match)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => response.json())
        .then(detailsBeer => this.setState({beer: detailsBeer}))
        .catch(err => console.log(err))
    }
   
    render() {
        return(
            <>
              <Container>

                  {
                  !this.state.beer ?
                    
                  <div className="spinner-container"><Spinner animation="border" /></div>
                  
                  :
                 
                 <Row>
                     <Col sm={12} className="column">
                          <img className="beer-detail-image" src={this.state.beer.image_url} alt={this.state.beer.name}  />
                     </Col>

                     <Col sm={12} className="separate-elements column">
                          <h3>{this.state.beer.name}</h3>
                          <h4 className="light-grey">{this.state.beer.attenuation_level}</h4>
                       
                     </Col>

                     <Col sm={12} className="separate-elements column">
                          <p className="light-grey" >{this.state.beer.tagline}</p>
                          <p className="bold" >{this.state.beer.first_brewed}</p>
                    </Col>

                    <Col sm={12} className="column">
                          <p>{this.state.beer.description}</p>
                          <small className="bold" >{this.state.beer.contributed_by}</small>
                    </Col>
                    
                 </Row>
                
                }
                
                <Row>
                   
                   <Link to={'/beer'} style={{ display: 'block', textDecoration: 'none', color: 'white', fontSize: '2em', marginLeft: '5%', backgroundColor: '#333', borderRadius: '1px',  border: '1px solid white', textAlign: 'center', letterSpacing: '1px', padding: '10px 0',  width: '120px' }} className='button back'>Back</Link>
                
                </Row>
            
            </Container>
            
            </>
        )
    }
}




export default DetailsBeer