import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SellerDashboard from './components/sellerDashboard/sellerDashboard';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './Routes';
import configureStore from './store';

function App() {
  return (
      <Provider store={configureStore()}>
        <Route path="/seller_dashboard" component={SellerDashboard} />
      </Provider>
  );
}

export default App;
