import React, { useState } from "react";
import styled from "styled-components";
import AddBtn from "components/gather/AddBtn";
import ContentControlBtn from "components/common/ContentControlBtn";
import { hideScrollBar } from "style/common";
import NavBar from "components/common/NavBar";
import StateGather from "components/gather/detail/StateGather";
import { ReactSortable } from "react-sortablejs";
import moment from "moment";
import { Header } from "components/common/Header";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .Title {
    margin: 4px 0 2px;
    font-family: "Pretendard-SemiBold";
    font-size: 18px;
    line-height: 28px;
    color: var(--Title_02);
    text-align: left;
  }
  .TotalAmount {
    display: flex;
    gap: 2px;
    margin-bottom: 18px;
    font-family: "Pretendard-SemiBold";
    font-size: 24px;
    line-height: 38px;
    color: var(--Title_02);

    .green {
      font-family: Roboto;
      font-weight: 700;
      color: var(--a2);
    }
  }
  .editBtnPosition {
    position: relative;
  }
`;
const Content = styled.div`
  ${hideScrollBar}
  flex: 1;

  .zeroCompleted {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard-Regular";
    font-size: 16px;
    line-height: 25px;
    color: var(--Body_01);

    img {
      filter: grayscale(1);
      margin-bottom: 12px;
    }
  }
`;
const EditBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-family: "Pretendard-Medium";
  font-size: 12px;
  line-height: 19px;
  padding: 3px 8px;
  border: none;
  border-radius: 12px;
  background-color: var(--Line_03);
  color: var(--Body_02);
  display: flex;
  align-items: center;
  gap: 4px;

  &.Active {
    padding: 3px 12px;
    color: #fff;
    background-color: #4caf5b;
    img {
      display: none;
    }
  }
`;

function Gather() {
  const userData = useSelector((state) => state.user);
  const gatherList = useSelector((state) => state.gather.gatherList);
  const inProgressList = [];
  const completedList = [];
  // ????????? ?????? ?????? ??????
  gatherList.map((x) => {
    if (x.savingMode === "?????????") {
      inProgressList.push(x);
    } else {
      if (!moment().isAfter(x.eDate) && x.currentAmount < x.goalAmount) {
        inProgressList.push(x);
      } else {
        completedList.push(x);
      }
    }
  });
  const isFirst = !gatherList.filter((x) => x.savingMode !== "?????????").length;
  const totalAmount = inProgressList.reduce((acc, cur) => {
    return (acc += cur.currentAmount);
  }, 0);

  const controlNameList = ["?????????", "??????"];
  const [listControl, setListControl] = useState(controlNameList[0]);
  const [editToggle, setEditToggle] = useState(false);

  const [gather, setGather] = useState([
    {
      id: 1,
      name: "?????????",
      adText: "?????? ??????????????? ???????????????????????? ???????????????.",
    },
    {
      id: 2,
      name: "??????",
      adText: "?????? ????????? ????????? ?????? ?????? ?????????????????????.",
    },
    {
      id: 3,
      name: "?????????",
      adText: "???????????? ?????? ?????? ??????????????? ?????? ???????????????.",
    },
  ]);

  return (
    <Container>
      <Header $title={false} keys={30} alarm={false}></Header>
      <div className="Title">
        {userData.info.name}?????? ?????? ????????? ?????? ??????????
      </div>
      <div className="TotalAmount">
        <span className="green">{totalAmount.toLocaleString()}</span> ???
      </div>
      <div className="editBtnPosition">
        <ContentControlBtn
          btnGap="24px"
          marginBottom="16px"
          listControl={listControl}
          setListControl={setListControl}
          controlNameList={controlNameList}
        />
        <EditBtn
          onClick={() => {
            setEditToggle(!editToggle);
          }}
          className={editToggle ? "Active" : ""}
        >
          <img
            src={require("assets/gather/Sort_arrow_light.svg").default}
            alt="???????????? ?????????"
          />
          {editToggle ? "????????????" : "?????? ????????????"}
        </EditBtn>
      </div>
      <Content>
        {listControl === "?????????" ? (
          <ReactSortable
            list={gather}
            setList={setGather}
            disabled={!editToggle}
            animation={500}
          >
            {gather.map((x) => (
              <AddBtn
                key={x.id}
                name={x.name}
                gatherList={inProgressList}
                editToggle={editToggle}
                isFirst={isFirst}
              >
                {x.adText}
              </AddBtn>
            ))}
          </ReactSortable>
        ) : (
          <>
            {completedList.length ? (
              completedList.map((x, idx) => (
                <StateGather key={idx} props={x} completed />
              ))
            ) : (
              <div className="zeroCompleted">
                <div>
                  <img src={require("assets/character_head.svg").default} />
                  <div>?????? ????????? ???????????? ?????????</div>
                </div>
              </div>
            )}
          </>
        )}
      </Content>
      <NavBar />
    </Container>
  );
}

export default Gather;
