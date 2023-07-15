import { parseQueryParamsOptions } from './parseQueryParamsOptions';

describe('parseQueryParamsOptions', () => {
  it('should parse query parameters options with filters and search', () => {
    const options = {
      type: 'vegetarian',
      meal: 'breakfast,lunch',
      search: 'pizza',
      page: 2,
    };
    const possibleFiltersKeys = ['type', 'meal'];

    const result = parseQueryParamsOptions(options, possibleFiltersKeys);

    expect(result).toEqual({
      search: 'pizza',
      page: 2,
      filters: {
        type: ['vegetarian'],
        meal: ['breakfast', 'lunch'],
      },
    });
  });

  it('should parse query parameters options without filters', () => {
    const options = {
      search: 'burger',
      page: 1,
    };
    const possibleFiltersKeys = ['type', 'meal'];

    const result = parseQueryParamsOptions(options, possibleFiltersKeys);

    expect(result).toEqual({
      search: 'burger',
      page: 1,
    });
  });

  it('should parse query parameters options with invalid page and ignore it', () => {
    const options = {
      type: 'vegan',
      meal: 'dinner',
      search: 'pasta',
      page: -1,
    };
    const possibleFiltersKeys = ['type', 'meal'];

    const result = parseQueryParamsOptions(options, possibleFiltersKeys);

    expect(result).toEqual({
      search: 'pasta',
      page: 1,
      filters: {
        type: ['vegan'],
        meal: ['dinner'],
      },
    });
  });

  it('should ignore invalid filters and return empty filters object', () => {
    const options = {
      type: 'meat',
      noExistFilter: 'noExistA,noExistB',
      search: 'pancakes',
      page: 1,
    };
    const possibleFiltersKeys = ['type', 'meal'];

    const result = parseQueryParamsOptions(options, possibleFiltersKeys);

    expect(result).toEqual({
      search: 'pancakes',
      filters: {
        type: ['meat'],
      },
      page: 1,
    });
  });

  it('should parse query parameters options without filters and search', () => {
    const options = {
      page: 1,
    };
    const possibleFiltersKeys = ['type', 'meal'];

    const result = parseQueryParamsOptions(options, possibleFiltersKeys);

    expect(result).toEqual({
      page: 1,
    });
  });
});
