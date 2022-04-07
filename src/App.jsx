import { createSignal, onMount, For } from "solid-js";
import { breweries } from "./breweries";
import { Footer } from "./footer";
export const App = () => {
    const [breweryList, setBreweryList] = createSignal([]);
    const fetchBreweries = async () => {
        setBreweryList(await breweries());
    };
    onMount(fetchBreweries);
    const smallText = "text-gray-600 text-sm";
    return (<main class="bg-purple-400">
      <h1 class="text-3xl text-blue-900 text-center py-6 underline">
        List of Breweries
      </h1>

      <section class="grid">
        <For each={breweryList()}>
          {(brewery) => {
            return (<div class="bg-white rounded p-3 m-4">
                <h1 class="text-2xl text-blue-900">{brewery.name}</h1>
                <h2 class="underline">{brewery.brewery_type}</h2>
                <p class={smallText}>{brewery.street}</p>
                <p class={smallText}>{brewery.city}</p>
                <p class={smallText}>{brewery.state}</p>
                <p class={smallText}>{brewery.country}</p>
                <p class={smallText}>{brewery.phone}</p>
                <p class={smallText}>{brewery.website_url}</p>
              </div>);
        }}
        </For>
      </section>
      <Footer />
    </main>);
};
