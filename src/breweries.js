export const BREWERIES_URL = "https://api.openbrewerydb.org/breweries";
export const breweries = async () => {
    const response = await fetch(BREWERIES_URL);
    const breweries = await response.json();
    return breweries;
};
