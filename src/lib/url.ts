import { useLocation } from 'react-router-dom';
export function useQueryParam(name:string){const {search}=useLocation();return new URLSearchParams(search).get(name)||''}
