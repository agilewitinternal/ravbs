import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import AboutUs from "./AboutUs/AboutUs"
import Counsulting from './Counsulting/Counsulting'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutUs" component={AboutUs}/>
      <Route exact path="/Counsulting" component={Counsulting}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
