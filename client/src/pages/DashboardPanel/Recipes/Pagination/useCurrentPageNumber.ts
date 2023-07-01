import { useLocation } from 'react-router-dom';

export const useCurrentPageNumber = () => {
  const location = useLocation();
  const pageFromUrl = new URLSearchParams(location.search).get('page');

  return pageFromUrl ? Number(pageFromUrl) : 1;
};
