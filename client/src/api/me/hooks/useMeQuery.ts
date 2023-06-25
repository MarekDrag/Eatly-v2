import { useQuery } from '@tanstack/react-query';

import { getMeRequest } from '../requests';

export const ME_QUERY_KEY = 'ME_QUERY_KEY' as const;

export const useMeQuery = () => {
  return useQuery([ME_QUERY_KEY], async () => (await getMeRequest()).data);
};
