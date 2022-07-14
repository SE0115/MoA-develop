import React, { useEffect, useState } from "react";
import AvailableSavingItem from "./AvailableSavingItem";
import { v1 as uuid } from "uuid";
import styled from "styled-components";
import availableSavingList from "../../../mockData/miliSavingList";

function AvailableSavingList({ listControl }) {
  const [sortedSavingList, setSortedSavingList] = useState([]);
  useEffect(() => {
    const copyList = JSON.parse(JSON.stringify(availableSavingList));
    if ("최고금리순" === listControl) {
      copyList.sort((a, b) => {
        return b.highestInterest - a.highestInterest;
      });
    } else {
      copyList.sort((a, b) => {
        return b.basicInterest - a.basicInterest;
      });
    }
    setSortedSavingList(copyList);
  }, [listControl, availableSavingList]);

  return (
    <SavingList>
      {sortedSavingList.map((item) => {
        return <AvailableSavingItem item={item} key={uuid()} />;
      })}
    </SavingList>
  );
}
const SavingList = styled.div`
  .item {
    margin-bottom: 12px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
`;

export default AvailableSavingList;
