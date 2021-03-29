import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import Marketplace from './components/Marketplace';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import {ProductProvider} from './components/contexts/ProductListContext';
import {TokenProvider} from './components/contexts/TokenContext';
import {UserProvider} from './components/contexts/UserAuthContext';
/* import PrivateRoute from './components/PrivateRoute' */

function App() {
  
  return (
    <TokenProvider>
    <UserProvider>
    <ProductProvider>
      <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/marketplace' component={Marketplace}/>
      {/*PrivateRoute will be used below*/}
      <Route path='/product-list' component={ProductList}/>
      <Route path='/add-product' component={AddProduct}/>
      
      
      </Switch>
    
    </div>
    </Router>
    </ProductProvider>
    </UserProvider>
    </TokenProvider>
  );
}

export default App;
