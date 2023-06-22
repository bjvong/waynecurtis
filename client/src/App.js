import React, { Component } from 'react';
import FadeBanner from "./components/crossfade";
import FooterNav from "./components/footer";
import BasicNav from "./components/navbar";







import './App.css';


class App extends Component {
  

  
render() {
    return (
      <>
<BasicNav/>
<FadeBanner/>
<FooterNav/>

      </>
    );
  }
}

export default App;