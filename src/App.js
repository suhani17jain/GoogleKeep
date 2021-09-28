import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header/header";
import SideNavBar from "../src/components/sideNavBar/sideNavBar"


const App = () => {
  return (
    <div className="App">
      <Header />
      <SideNavBar />
    </div>
  );
}

export default App;
