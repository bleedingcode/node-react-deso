import { useCallback } from 'react';
import { getDeso } from '../../lib/utils';

type IUseIdentity = {
  login: () => Promise<Object>;
  logout: () => Promise<Boolean>;
};

export const useIdentity = (): IUseIdentity => {
  const login = useCallback(async (accessLevel: string = '') => {
    const deso = getDeso();
    const result = await deso.identity.login(accessLevel);
    return result;
  }, []);

  const logout = useCallback(async (publicKey: string = '') => {
    const deso = getDeso();
    const result = await deso.identity.logout(publicKey);
    return result;
  }, []);

  return { login, logout };
};
