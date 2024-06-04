import { GeoGouvRegion } from 'types/Region';

export const parseFranceRegions = (data: GeoGouvRegion[]): GeoGouvRegion[] => {
  return data.map((region) => {
    let regionCode = region.code;
    if (region.code.startsWith('0')) {
      regionCode = regionCode.slice(1);
    }

    return { ...region, code: regionCode };
  });
};
