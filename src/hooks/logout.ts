import { useDispatch } from 'react-redux';
import { logUserOut } from '../redux/App/actionCreators';
import { clearStore } from '../redux/User/actionCreators';
import BrowserStorageService from '../services/browserStorageService';

const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    BrowserStorageService.clearItem('token');
    BrowserStorageService.clearItem('signingKey');
    BrowserStorageService.clearItem('keysign');
    BrowserStorageService.clearItem('accountNumber');
    dispatch(logUserOut());
    dispatch(clearStore());
  };
  return {
    logout,
  };
};

export default useLogout;
