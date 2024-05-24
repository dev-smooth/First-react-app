import { Footer, Exclusive_products, Header, About_Us } from "./Component";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Exclusive_products />
        </Route>
        <Route path="/about_us">
          <About_Us />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
