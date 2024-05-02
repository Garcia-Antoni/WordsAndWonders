import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

import Login from './components/Login/Login.jsx';

function App() {
  return (
    <>
      <Login /> {/** Login component */}

      {/** Footer */}
      <footer style={{ backgroundColor: 'rgb(255, 193, 7)' }} className='p-2'>
        <p>placeholder</p>
      </footer>
      {/** footer-element */}
    </>
  );
}

export default App;