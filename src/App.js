import React from 'react';
import Main from './routes/Main.js';
import About from './routes/About.js';
import Reference from './routes/Reference.js';
import Script from './routes/Script.js';
import Ani from './routes/Ani.js';
import Site from './routes/Site.js';
import Contact from './routes/Contact.js';
import Detail from './routes/Detail.js';
import { HashRouter, Route } from 'react-router-dom';
import './scss/style.scss'
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/reference" component={Reference} />
      <Route path="/reference-detail" component={Detail} />
      <Route path="/script" component={Script} />
      <Route path="/ani" component={Ani} />
      <Route path="/site" component={Site} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}
export default App;