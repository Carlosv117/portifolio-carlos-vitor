import { RoutesPages } from './Routers';
import GlobalStyle from './Styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from './Components/Particles';

function App() {
  return (
    <>
      <Particle/>
      <GlobalStyle/>
      <RoutesPages/>
      <ToastContainer/>
    </>
  );
}

export default App;
