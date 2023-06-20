import Card from "./Card";
import "./Cards.css";
import { useRef } from "react";

function Cards({ onScroll, listInnerRef, itemList }) {
  const id = useRef(0);
  return (
    <div className="All-Cards-container" onScroll={onScroll}
    ref={listInnerRef}>
      {itemList.map((item) => {
        id.current++;
        return <Card key={id.current} {...item} />;
      })}
    </div>
  );
}

export default Cards;
