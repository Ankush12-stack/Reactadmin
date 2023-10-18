import './App.css';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="d-flex">
     <div className='w-auto'>
      <Sidebar />
     </div>
     <div className='col'>
      <Navbar />
      <Home />
     </div>
    </div>
  );
}

export default App;
