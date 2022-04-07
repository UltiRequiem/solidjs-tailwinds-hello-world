export const BREWERIES_URL = "https://api.openbrewerydb.org/breweries";

export interface Breweries {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: any;
  address_3: any;
  city: string;
  state: string;
  county_province: any;
  postal_code: string;
  country: string;
  longitude: any;
  latitude: any;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
}

export const breweries = async () => {
  const response = await fetch(BREWERIES_URL);
  const breweries = await response.json();
  return breweries as Breweries[];
};
