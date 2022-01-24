import React from "react";
import styled, { css } from "styled-components";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Tag from "components/common/Tag";
import StoreSvg from "components/gather/StoreSvg";

const Container = styled.div`
  /* position: relative; */
  margin: 0 -4px;
  height: fit-content;
  /* padding: 20px 20px 12px; */
  padding: 20px 0px 3px;
  ${({ category }) =>
    category === "비상금" &&
    css`
      padding: 20px 0 12px;
    `}
  box-sizing: border-box;
  background-color: #fff;
  /* box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.08); */
  /* border-radius: 20px; */
`;

const Main = styled.div`
  display: flex;
  font-family: "Pretendard-SemiBold";
  color: #333333;
  font-size: 16px;
  line-height: 25px;

  .content {
    flex: 1;
    text-align: left;
  }
  .dDay {
    font-family: Roboto;
    font-size: 12px;
    line-height: 19px;
    color: #212121;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  background: #f8f8f8;
  border-radius: 10.2698px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ category }) =>
    category === "목표"
      ? css`
          path.main {
            fill: #28a49d;
          }
        `
      : category === "비상금"
      ? css`
          path.main {
            fill: #f8cb57;
          }
        `
      : css`
          path.main {
            fill: #4caf5b;
          }
        `}
`;

const State = styled.div`
  .progressbar {
    height: 8px;
    margin: 17px 0 8px;
  }
  .amount {
    display: flex;
    justify-content: space-between;

    font-size: 12px;
    line-height: 19px;
    font-family: "Pretendard-Medium";
    color: var(--Body_02);

    .currentAmount {
      display: flex;
      gap: 2px;
    }
    .targetAmount {
      display: flex;
      gap: 2px;
    }
    span {
      font-family: Roboto;
      font-weight: 500;
    }
    .blackNum {
      color: var(--Title_02);
    }
  }
`;

function StateGather({ props }) {
  return (
    <Container category={props.category}>
      <Main>
        <Icon category={props.category}>
          {props.goal_category ? (
            <StoreSvg category="여행" />
          ) : props.category === "군적금" ? (
            <StoreSvg category="군적금" />
          ) : (
            <StoreSvg category="비상금" />
          )}
        </Icon>
        <div className="content">
          <div>{props.name}</div>
          {props.category !== "비상금" && <div className="dDay">D-123</div>}
          {props.category === "비상금" && (
            <State style={{ marginTop: "2px" }}>
              <div className="amount">
                <div className="targetAmount">
                  <span className="blackNum">{props.targetAmount}</span> 원
                </div>
              </div>
            </State>
          )}
        </div>
        <Tag className="tag">{props.category}</Tag>
      </Main>
      {props.category !== "비상금" && (
        <State>
          <div className="progressbar">
            <ProgressBar
              percent={(props.currentAmount / props.targetAmount) * 100}
              filledBackground={
                props.category === "군적금" ? "#4CAF5B" : "#28A49D"
              }
              unfilledBackground="#EBEBEB"
              height="8px"
            />
          </div>
          <div className="amount">
            <div className="currentAmount">
              <span className="blackNum">{props.currentAmount}</span> 원
            </div>
            <div className="targetAmount">
              <span>{props.targetAmount}</span> 원
            </div>
          </div>
        </State>
      )}
    </Container>
  );
}

export default StateGather;
