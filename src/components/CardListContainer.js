import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

function CardListContainer({itemList}) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
//   const [itemList, setItemList] = useState([]);
  const [lastList, setLastList] = useState(false);

  /*
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10`
      );
      console.log(response.data.data, "<<<");
      if (!response.data.data.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setItemList([...itemList, ...response.data.data]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, itemList]);

  

  */
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <Cards
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      itemList={itemList}
    />
  );
}

export default CardListContainer;
