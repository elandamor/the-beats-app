import { useContext } from 'react';
// @ts-ignore - __RouterContext is experimental and therefore not exported by 'react-router-dom'
import { __RouterContext, RouteComponentProps } from 'react-router-dom';

export default function useRouter(): RouteComponentProps {
  if (useContext(__RouterContext) === undefined) {
    throw new Error('useRouter must be used within a Router');
  }

  return useContext(__RouterContext);
}
