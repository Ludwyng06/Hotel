import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/nav';
import './App.css';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Hotels by Meducin</title>
      </Helmet>

      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
