import AppRoutes from './routes/index.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppProvider from './providers/app.jsx';
function App() {
  return (
    <AppProvider>
      <AppRoutes />
      {/*  토스트 알림 관리하기 위한 ToastContainer*/}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </AppProvider>
  );
}

export default App;
