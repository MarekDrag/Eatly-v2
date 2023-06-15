import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastContainerProps: ToastContainerProps = {
  autoClose: 5000,
  position: 'bottom-left',
  theme: 'light',
  toastClassName: 'bg-gray-800',
  hideProgressBar: true,
  newestOnTop: true,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
};

export const Notifications = () => {
  return <ToastContainer {...toastContainerProps} />;
};
