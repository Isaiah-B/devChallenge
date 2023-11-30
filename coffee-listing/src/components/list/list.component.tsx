import Card from "../card/card.component";

import "./list.styles.css";

export type ListItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null;
  votes: number;
  popular: boolean;
  available: boolean;
}

export default function List({ items }: { items: ListItem[] }) {  
  return (
    <section className="card-list">
      {items.map((item) => (
        <Card data={item} />
      ))}
    </section>
  )
}