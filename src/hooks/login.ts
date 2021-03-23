import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logUserIn } from '../redux/App/actionCreators';
import BrowserStorageService from '../services/browserStorageService';
import EncryptionService from '../services/encryptionService';

const useLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginSuccess = (res: any, signingKey: string, accountNumber?: string) => {
    const encryptedSigningKey = EncryptionService.encryptData(signingKey);
    BrowserStorageService.setItem('token', res.data.login.token);
    BrowserStorageService.setItem('signingKey', encryptedSigningKey);
    BrowserStorageService.setItem('keysign', false);
    if (accountNumber) BrowserStorageService.setItem('accountNumber', accountNumber);
    dispatch(logUserIn());
    if (res.data.login.newUser === true) {
      // send them to account setup.
      history.push('/setup');
    } else {
      // send them to wallet page.
      history.push('/dashboard/wallet');
    }
  };
  return {
    loginSuccess,
  };
};

export default useLogin;
