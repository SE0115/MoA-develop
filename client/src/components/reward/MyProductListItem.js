import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MyProductListItem({ item }) {
  const history = useNavigate();

  return (
    <MyRewardListItemStyle>
      <img className="item" src={item.productImageUrl} alt={item.name} />
      <span
        className={
          item.productName.length > 10 ? "itemName longName" : "itemName"
        }
      >
        {item.productName}
      </span>
      <label
        onClick={() => {
          history(`${item.productId}`, { state: item });
        }}
      >
        <img
          className="barcode"
          src={require("assets/reward/barcode.svg").default}
          alt="바코드"
        />
        <img
          className="magnify"
          src={require("assets/reward/ic_magnify.svg").default}
          alt=""
        />
      </label>
      <span>바코드를 누르면 결제창이</span>
      <span>활성화 됩니다</span>
    </MyRewardListItemStyle>
  );
}
const MyRewardListItemStyle = styled.div`
  width: calc(160 / 335 * 100%);
  padding: 24px 10px 14px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pretendard-Regular";

  font-size: 10px;
  line-height: 16px;
  color: var(--Body_03);
  img {
    &.item {
      width: calc(140 / 160 * 100%);
    }
    margin-bottom: 8px;
  }
  label {
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  .magnify {
    position: absolute;
    bottom: -4px;
    right: -4px;
  }
  .itemName {
    font-family: "Pretendard-SemiBold";
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    margin: 0 0 8px 0;
    color: var(--Title_01);
    &.longName {
      font-size: 14px;
    }
  }
  .barcode {
    width: 52px;
  }
`;
export default MyProductListItem;
