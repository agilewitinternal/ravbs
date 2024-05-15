import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import AboutUs from "./AboutUs/AboutUs"

function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/AboutUs" component={AboutUs}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
