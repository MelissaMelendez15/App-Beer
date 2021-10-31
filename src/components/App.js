import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './ui/navbar/Navbar'
import IndexPage from './pages/index/IndexPage'
import BeerIndex from './pages/beer-index/BeerIndex';
import DetailsBeer from './pages/detailsBeer/DetailsBeer'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Footer from './ui/footer/Footer';


const App = () => {
  
  return (
  <>
     <Navbar />
     
     <Switch>
       <Route path='/' exact render={() => <IndexPage />}  />
       <Route path='/beer' exact render={() => <BeerIndex />} />
       <Route path='/details/:beerId' render={(props) => <DetailsBeer {...props} />} />
     </Switch>
     
     <Footer />
     
  </>
  
   );
}

export default App;
