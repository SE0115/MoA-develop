import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { v1 as uuid } from "uuid";
function RewardBoxItem({ setBuyBoxItem, boxItem, setBuyClick }) {
  const userData = useSelector((state) => state.user);
  const history = useNavigate();

  return (
    <BoxCard
      onClick={() => {
        if (userData.id) {
          setBuyBoxItem(boxItem);
          setBuyClick(true);
        } else {
          history("/login");
        }
      }}
    >
      <div className="boxContent">
        <img
          className="boxImage"
          src={boxItem.boxImageUrl}
          alt={boxItem.boxName}
        />
        <BoxTitle>{boxItem.boxName}</BoxTitle>
        <BoxDescription>
          <span className="bold">[획득 가능 상품]</span>
          {boxItem.boxDescription &&
            boxItem.boxDescription.map((item) => (
              <span key={uuid()}>{item}</span>
            ))}
        </BoxDescription>
        <BoxPrice>
          <img
            src={require(`assets/ic_key_small.svg`).default}
            alt="열쇠개수"
          />
          <span>{boxItem.boxPrice}</span>
        </BoxPrice>
      </div>
    </BoxCard>
  );
}
const BoxPrice = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--Title_01);
  span {
    margin-bottom: -4px;
  }
`;
const BoxDescription = styled.div`
  min-height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  line-height: 19px;
  color: var(--Body_01);
  margin-bottom: 8px;
  .bold {
    color: var(--Title_02);
  }
`;
const BoxTitle = styled.div`
  font-family: "Pretendard-SemiBold";
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);
  margin-bottom: 4px;
  text-align: start;
`;
const BoxImage = css`
  width: 100%;
  margin-bottom: 12px;
`;
const BoxCard = styled.div`
  width: calc(160 / 335 * 100%);
  min-height: 254px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .boxContent {
    margin: 0 auto;
  }
  .boxImage {
    ${BoxImage}
  }
  &:hover {
    cursor: pointer;
  }
`;
export default RewardBoxItem;
