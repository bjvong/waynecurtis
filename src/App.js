import FadeBanner from "./components/crossfade";
import FooterNav from "./components/footer";
import BasicNav from "./components/navbar";
import React, { Component } from 'react';

class App extends Component {
  state = {
      data: null
    };
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };

// function App() {
render(){
  return (<>
<BasicNav/>
<FadeBanner/>
<FooterNav/>
</>
  );
}
}

export default App;
