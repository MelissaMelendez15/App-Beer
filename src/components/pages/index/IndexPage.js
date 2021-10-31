import React from 'react'
import { Link } from 'react-router-dom'


import './IndexPage.css'


const IndexPage = () => {
     
    return(
       
       <main className="hero">
        
         <div>
           
           <h1 className="title">Cool Beers?</h1>
           
           <Link to={'/beer'} style={{ display: 'block', textDecoration: 'none', color: 'white', fontSize: '.7em', marginLeft: '5%', backgroundColor: 'transparent', borderRadius: '1px',  border: '1px solid white', margin:'40px auto', letterSpacing: '1px', padding: '10px 0',  width: '160px' }} className="button small">Take a look</Link>
         
         </div>
         
         
        
      </main>
    )
}







export default IndexPage