import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logUserIn, logUserOut } from '../redux/App/actionCreators';
import BrowserStorageService from '../services/browserStorageService';

const useApp = () => {
  const dispatch = useDispatch();
  const [validating, setValidating] = useState(true);

  const validateUser = useCallback(() => {
    const token = BrowserStorageService.getItem('token');
    const signingKey = BrowserStorageService.getItem('signingKey');
    const accountNumber = BrowserStorageService.getItem('accountNumber');

    // Update when we start using sessions
    if (!token || !signingKey || !accountNumber) {
      setValidating(false);
      logUserOut();
    } else {
      dispatch(logUserIn());
      setValidating(false);
    }
  }, [dispatch]);
  return {
    validateUser,
    validating,
  };
};

export default useApp;
