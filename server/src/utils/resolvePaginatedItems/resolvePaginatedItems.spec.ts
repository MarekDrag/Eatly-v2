import { Options } from '@types';

import { resolvePaginatedItems } from './resolvePaginatedItems';

describe('resolvePaginatedItems', () => {
  const items = [1, 2, 3, 4, 5];
  const total = 200;
  const totalCount = [{ total }];
  const limit = 48;

  it('should return result with reset page when query params are provided', () => {
    const optionsWithSearch: Options = {
      search: 'example',
      page: 4,
    };
    const optionsWithFilters: Options = {
      filters: { type: 'vege' },
      page: 3,
    };
    const optionsWithSearchAndFilter: Options = {
      search: 'example',
      filters: { type: 'vege' },
      page: 2,
    };
    const propsWithSearch = { items, totalCount, limit, options: optionsWithSearch };
    const propsWithFilters = { items, totalCount, limit, options: optionsWithFilters };
    const propsWithSearchAndFilters = { items, totalCount, limit, options: optionsWithSearchAndFilter };

    const resultWithSearch = resolvePaginatedItems(propsWithSearch);
    const resultWithFilters = resolvePaginatedItems(propsWithFilters);
    const resultWithSearchAndFilters = resolvePaginatedItems(propsWithSearchAndFilters);

    const expectedResult = {
      items,
      pagination: {
        total,
        pages: 5,
        page: 1,
        limit,
      },
    };

    expect(resultWithSearch).toEqual(expectedResult);
    expect(resultWithFilters).toEqual(expectedResult);
    expect(resultWithSearchAndFilters).toEqual(expectedResult);
  });

  it('should return the correct result without page number reset', () => {
    const options: Options = {
      page: 3,
    };
    const props = { items, totalCount, limit, options };
    const result = resolvePaginatedItems(props);

    expect(result).toEqual({
      items,
      pagination: {
        total,
        pages: 5,
        page: 3,
        limit,
      },
    });
  });

  it('should return correct number of pages', () => {
    const options: Options = {
      page: 3,
    };
    const props1 = { items, totalCount: [{ total: 199 }], limit: 50, options };
    const props2 = { items, totalCount: [{ total: 200 }], limit: 50, options };
    const props3 = { items, totalCount: [{ total: 201 }], limit: 50, options };

    const result1 = resolvePaginatedItems(props1);
    const result2 = resolvePaginatedItems(props2);
    const result3 = resolvePaginatedItems(props3);
    const expectedPagination = {
      page: 3,
      limit: 50,
    };

    expect(result1).toEqual({
      items,
      pagination: { ...expectedPagination, pages: 4, total: 199 },
    });
    expect(result2).toEqual({
      items,
      pagination: { ...expectedPagination, pages: 4, total: 200 },
    });
    expect(result3).toEqual({
      items,
      pagination: { ...expectedPagination, pages: 5, total: 201 },
    });
  });

  it('should return "pages" number as page when page is higher then pages', () => {
    const options: Options = {
      page: 6,
    };
    const props = { items, totalCount, limit, options };

    const result = resolvePaginatedItems(props);

    expect(result).toEqual({
      items,
      pagination: { total, pages: 5, page: 5, limit },
    });
  });
});
