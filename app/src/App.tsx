import { useEffect, useState } from 'react';

import data from "./data.json";

import './App.styles.css';
import List, { ListItem } from './components/list/list.component';

export default function App() {
  const [items] = useState<ListItem[]>(data as ListItem[]);
  const [filteredItems, setFilteredItems] = useState<ListItem[]>(items);
  const [filter, setFilter] = useState<"all" | "available">("all");

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(items);
    } else if (filter === "available") {
      const availableItems = items.filter((item) => item.available);
      setFilteredItems(availableItems);
    }
  }, [filter, items]);

  return (
    <div className="container">
      <div className="background-img" />

      <main className='content'>
        <img src='/vector.svg' alt='' className='content-bg' aria-hidden />
        <section className='content-header'>
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees from different 
            roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>

          <div className='filters'>
            <label>
              <input
                type="radio"
                name="filter"
                value="all"
                onChange={() => setFilter("all")}
                checked={filter === "all"}
              />
              <div role="radio" className="custom-radio">All Products</div>
            </label>

            <label>
              <input
                type="radio"
                name="filter"
                value="available"
                onChange={() => setFilter("available")}
                checked={filter === "available"}
              />
              <div role="radio" className="custom-radio">Available Now</div>
            </label>
          </div>
        </section>

        <List items={filteredItems} />
      </main>
    </div>
  )
}
