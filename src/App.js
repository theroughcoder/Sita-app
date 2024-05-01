import logo from './logo.svg';
import './App.css';
import Home from './view/home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={true}
            theme="light"

          />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
