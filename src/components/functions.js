/**
 * @function
 * All the functions should only be used here, not in general.
 */

export const getData = (url, param = '') => {
  const result = fetch(url + param).then((res) => res.json());
  return result;
};

export const getAreaFormatted = (rawData) => {
  const rawAreaUnformat = Array.from(
    new Set(rawData?.responseData.map((item) => item.site_id))
  );
  const countiesSet = new Set();
  const countiesAndDistrictsSet = new Set();

  rawAreaUnformat.forEach((item) => {
    const [city, _] = item.split(/(?<=市|區)/);
    countiesSet.add(city);
    countiesAndDistrictsSet.add(item);
  });
  const counties = Array.from(countiesSet);
  const countiesAndDistricts = Array.from(countiesAndDistrictsSet);

  return [counties, countiesAndDistricts];
};
