import { useEffect, useState } from "react";
import { ListItem } from "../list/list.component";

import "./card.styles.css";

export default function Card({ data }: { data: ListItem }) {
  const [image, setImage] = useState<string | null>(null);
  
  const formattedRating = data.rating
    ? data.rating.toFixed(2).replace(/0{1}$/, "")
    : null;

  
  useEffect(() => {
    const img = new Image();
    img.src = data.image;
    
    img.onload = () => {
      setImage(data.image)
    }
  }, [data.image]);

  return (
    <article className={`card-container${data.popular ? " popular" : ""}`}>
      {!image
        ? <div className="skeleton" />
        : (
          <div className="card-img-wrapper">
            <img
              src={data.image}
              alt={data.name}
              className="card-img"
            />
          </div>
        )}

      <div className="card-top-row">
        <h2>{data.name}</h2>
        <span className="card-tag">{data.price}</span>
      </div>

      <div className="card-bottom-row">
        <div className="card-rating">
          {data.votes > 0
            ? <img src="/Star_fill.svg" alt="" aria-hidden />
            : <img src="/Star.svg" alt="" aria-hidden />
          }

          {data.votes > 0
            ? (
              <>
                <span>{formattedRating}</span>
                <p>({data.votes} votes)</p>
              </>
            )
            : <p>No ratings</p>
          }
        </div>

        {data.available
          ? null
          : <span className="sold-out-text">Sold Out</span>
        }
      </div>
    </article>
  );
}