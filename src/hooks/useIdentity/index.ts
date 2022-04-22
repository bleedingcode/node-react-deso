import { useCallback } from 'react';
import { getDeso } from '../../lib/utils';

type IUseIdentity = {
  login: () => Promise<Object>;
};

export const useIdentity = (): IUseIdentity => {
  const login = useCallback(async (accessLevel: string = '') => {
    const deso = getDeso();
    const user = await deso.identity.login(accessLevel);
    return user;
  }, []);

  return { login };
};
