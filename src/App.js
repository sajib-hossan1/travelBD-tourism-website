import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddNewDestination from './components/AddNewDestination/AddNewDestination';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import Testimonials from './components/Home/Testimonials/Testimonials';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';

// font-family: 'Noto Sans', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Raleway', sans-serif;

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                  <Home></Home>
              </Route>
              <Route path='/home'>
                  <Home></Home>
              </Route>
              <Route path='/destinations'>
                  <Home></Home>
              </Route>
              <Route path='/tesimonials'>
                  <Testimonials></Testimonials>
              </Route>
              <Route path='/aboutUs'>
                  <Home></Home>
              </Route>
              <Route path='/login'>
                  <Login></Login>
              </Route>
              <Route path='/register'>
                  <Register></Register>
              </Route>
              <Route path='/myOrders'>
                  <MyOrders></MyOrders>
              </Route>
              <Route path='/manageAllOrders'>
                  <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path='/addNewDestination'>
                  <AddNewDestination></AddNewDestination>
              </Route>
              <Route path='*'>
                  <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
