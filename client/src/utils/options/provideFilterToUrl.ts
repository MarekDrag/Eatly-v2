export type Filter = {
  key: string;
  values: (string | number)[];
};

const changeFilterValue = (url: string, key: string, newfilter: string) => {
  const previousFilterValues = new URLSearchParams(location.search).get(key);
  const previousFilter = `&${key}=${previousFilterValues}`;

  return url.replace(previousFilter, newfilter);
};

export const provideFilterToUrl = ({ key, values }: Filter) => {
  const url = location.pathname + location.search;
  const filter = `&${key}=${values.join(',')}`;
  console.log(url, key, filter, values);

  if (url.includes(key) && values.length > 0) {
    return changeFilterValue(url, key, filter);
  }
  if (url.includes(key)) {
    return url.replace(`&${key}=`, '');
  }

  return url + filter;
};
