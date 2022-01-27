import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logUserIn } from '../redux/App/actionCreators';
import { setAccount } from '../redux/User/actionCreators';
import BrowserStorageService from '../services/browserStorageService';
import EncryptionService from '../services/encryptionService';

const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginSuccess = (accountNumber: string, signingKey?: string) => {
    const encryptedSigningKey = EncryptionService.encryptData(signingKey);
    BrowserStorageService.setItem('signingKey', encryptedSigningKey);
    BrowserStorageService.setItem('keysign', !signingKey);
    if (accountNumber) BrowserStorageService.setItem('accountNumber', accountNumber);
    dispatch(setAccount(accountNumber));
    dispatch(logUserIn());
    history.push('/dashboard');
  };
  return {
    loginSuccess,
  };
};

export default useLogin;
