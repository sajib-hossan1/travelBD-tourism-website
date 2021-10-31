import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddNewDestination from './components/AddNewDestination/AddNewDestination';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Booking from './components/Booking/Booking';
import MyBooking from './components/MyBooking/MyBooking';
import ManageAllBooking from './components/ManageAllBooking/ManageAllBooking';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div>
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
              <PrivateRoute path="/destination/:destinationId">
                    <DestinationDetails></DestinationDetails>
                </PrivateRoute>
              <Route path='/aboutUs'>
                  <AboutUs></AboutUs>
              </Route>
              <Route path='/login'>
                  <Login></Login>
              </Route>
              <Route path='/register'>
                  <Register></Register>
              </Route>
              <PrivateRoute path='/myBooking'>
                  <MyBooking></MyBooking>
              </PrivateRoute>
              <PrivateRoute path='/manageAllBooking'>
                  <ManageAllBooking></ManageAllBooking>
              </PrivateRoute>
              <PrivateRoute path='/addNewDestination'>
                  <AddNewDestination></AddNewDestination>
              </PrivateRoute>
              <PrivateRoute path='/booking/:bookingId'>
                  <Booking></Booking>
              </PrivateRoute>
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
