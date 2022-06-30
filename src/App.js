import { RoutesPages } from './Routers';
import GlobalStyle from './Styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RoutesPages/>
      <ToastContainer/>
    </>
  );
}

export default App;
