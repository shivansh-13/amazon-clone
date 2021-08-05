// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { auth, db } from './firebase';
import Login from './Login';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })

  }

  const signOut = ()=>{
     auth.signOut().then(()=>{
       localStorage.removeItem('user')
       setUser(null)
     })
  }


  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <BrowserRouter>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          
            <div className="App">
              <Header
               user={user} 
               signOut={signOut}
               cartItems={cartItems}
                />
              <Switch>
                <Route path="/cart">
                  <Cart cartItems={cartItems} />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

          
        )
      }
    </BrowserRouter>
  );
}

export default App;
