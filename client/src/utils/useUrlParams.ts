import { useSearchParams } from 'react-router-dom';

type UrlKeys = 'search' | 'page' | 'type' | 'meal';

type ReturnType = [string | null, (value: string) => void];

export const useUrlParams = (key: UrlKeys): ReturnType => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setUrlParam = (value: string) => {
    setSearchParams((prevParams) => {
      if (value) {
        prevParams.set(key, value);
      } else {
        prevParams.delete(key);
      }
      return prevParams;
    });
  };

  const urlParam = searchParams.get(key);

  return [urlParam, setUrlParam];
};
