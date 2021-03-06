import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function AvailableSavingItem({ item }) {
  const history = useNavigate();
  return (
    <SavingItemBox
      onClick={() => {
        history(`/gather/add-militarySaving/${item.bank.bankName}`, {
          state: item,
        });
      }}
    >
      {/* 로고 */}
      <div className="banklogo">
        <img
          src={item.bank.bankImageUrl}
          // src={require(`assets/gather/ic_banklogo_${item.은행코드}.svg`)}
          alt={item.bank.bankName}
        />
      </div>
      {/* 상품이름 및 기본금리*/}
      <div className="savingInfo">
        <span className="savingName">
          {item.bank.bankName} {item.productName}
        </span>
        <span className="savingRate">
          <span className="rigntMargin">기본</span>
          <span className="robotoFont">
            {item.basicInterest.toFixed(1)}% (12
          </span>
          <span>개월</span>
          <span className="robotoFont">)</span>
        </span>
      </div>
      {/* 최대금리 */}
      <div className="savingMaxRate">
        <span className="maxRateNum">{item.highestInterest.toFixed(1)}%</span>
        <span>최대금리</span>
      </div>
    </SavingItemBox>
  );
}
export default AvailableSavingItem;

const SavingItemBox = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 16px;
  box-sizing: border-box;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
  }
  .banklogo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: #edefed;
    border-radius: 48px;
    img {
      width: 24px;
    }
  }
  .savingInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    margin-bottom: -8px;
    flex-grow: 1;
    .savingName {
      font-family: "Pretendard-Medium";
      font-size: calc(16rem / 16);
      line-height: 25px;
      margin-bottom: 2px;
      color: var(--Title_02);
    }
    .savingRate {
      display: flex;
      align-items: center;
      font-family: "Pretendard-Regular";
      font-size: calc(14rem / 16);
      line-height: 22px;
      color: var(--Body_01);
      .robotoFont {
        font-family: "Roboto";
      }
      .rigntMargin {
        margin-right: 2px;
      }
    }
  }

  .savingMaxRate {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: var(--a2);
    .maxRateNum {
      font-family: "Roboto";
      font-size: calc(18rem / 16);
      font-weight: 700;
      line-height: 28px;
    }
    span {
      font-family: "Pretendard-Regular";
      font-size: calc(14rem / 16);
      line-height: 22px;
    }
  }
`;
