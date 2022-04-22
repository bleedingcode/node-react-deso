import { useCallback } from 'react';
import { getDeso } from '../../lib/utils';

type IUseIdentity = {
  login: () => any;
};

export const useIdentity = (): IUseIdentity => {
  const login = useCallback((accessLevel: string = '') => {
    console.log('running login');
    const deso = getDeso();
    deso.identity.login(accessLevel).then((user: any) => {
      return user;
    });
  }, []);

  return { login };
};
