import type { Component } from "solid-js";
import { createSignal, onMount, For } from "solid-js";

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

const App: Component = () => {
  const [breweryList, setBreweryList] = createSignal<Breweries[]>([]);
  const fetchBreweries = () => {
    const apiUrl = "https://api.openbrewerydb.org/breweries/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBreweryList(data));
  };

  onMount(() => fetchBreweries());

  return (
    <div class="bg-blue-200 h-full">
      <h1 class="text-3xl text-red-400 text-center py-6">List of Breweries</h1>
      <ul class="container mx-auto pb-10 grid grid-cols-4 gap-10">
        <For each={breweryList()}>
          {(list) => (
            <li class="bg-white p-4">
              <span class="inline-block mb-2 text-lg font-bold">
                {list.name}
              </span>
              <span class="inline-block mb-2">Country: {list.country}</span>
              <span class="inline-block mb-2">City: {list.city}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default App;
