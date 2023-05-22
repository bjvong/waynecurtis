import FadeBanner from "./components/crossfade";
import FooterNav from "./components/footer";
import BasicNav from "./components/navbar";

// var ws = new WebSocket('wss://wayne-curtis.herokuapp.com/');

function App() {
  return (<>
<BasicNav/>
<FadeBanner/>
<FooterNav/>
</>
  );
}

export default App;
