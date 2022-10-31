import "./App.css";
import Movies from "./components/movies";
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    // <div className="App container">
    //   <Movies/>
    // </div>
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route
            path="/products"
            render={(props) => <Products sortBy="newest" {...props} />}
          />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Redirect from="/messages" to="/posts" />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
