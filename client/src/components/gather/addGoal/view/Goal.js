import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import Category from "components/gather/addGoal/Category";
import SelectBox from "components/gather/addGoal/SelectBox";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import { calcAmount } from "components/gather/addGoal/utils";
import BackHeader from "components/common/BackHeader";
import { hideScrollBar } from "style/common";
import DatePick from "../DatePick";
import { v1 as uuid } from "uuid";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;

  .Title {
    ${styleTitle}
    margin-top: 12px;
  }
  .SubTitle {
    ${styleSubTitle}
    padding: 0 0 4px 4px;
  }
  .Text {
    ${styleSubTitle}
    font-family: "Pretendard-Regular";
    color: var(--Body_01);
    display: flex;
    padding-top: 4px;

    span {
      color: var(--a2);
    }
  }
  .Notice {
    display: flex;
    ${styleNotice}
    padding: 8px 0 0 4px;
  }
  .Empasis {
    ${styleNotice}
    color: var(--Title_02);
  }

  .l_space {
    margin-left: 4px;
  }
  .r_space {
    margin-right: 4px;
  }
`;

const Content = styled.div`
  ${hideScrollBar}
  padding-bottom: 10px;
`;

const InputEl = styled.div`
  margin-top: 24px;
`;

const GoalName = styled.div`
  margin-top: 24px;
`;

const CustomInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  line-height: 25px;
  color: var(--Title_01);

  &::placeholder {
    color: #c5c5c5;
  }
  &:disabled {
    background-color: #ebebeb;
  }
`;

const SubSelectBox = styled.div`
  margin-top: 16px;
`;

function Goal() {
  const avgCnt = 2;
  const accounts = useSelector((state) => state.user.info.accounts);
  const inout = accounts.filter((x) => x.accountType === "?????????");

  const [inputs, setInputs] = useState({
    id: uuid(),
    savingMode: "??????",
    goalName: "",
    category: "??????",
    currentAmount: 0,
    goalAmount: 0,
    account: {
      bankName: inout[0].bankName,
      productName: "",
      accountNumber: inout[0].accountNumber,
      accountCurrentAmount: inout[0].currentAmount,
      bankImageUrl: inout[0].bankImageUrl,
    },
    sDate: new Date(),
    eDate: "",
    depositMethod: "????????????",
    limitCycle: "?????? 10???",
    amountPerCycle: 0,
    transactions: [],
  });

  useEffect(() => {
    if (
      inputs.eDate !== "" &&
      inputs.depositMethod === "????????????" &&
      inputs.amountPerCycle !== ""
    ) {
      setInputs({
        ...inputs,
        goalAmount: calcAmount(inputs),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.limitCycle, inputs.eDate]);

  useEffect(() => {
    if (inputs.depositMethod === "????????????") {
      setInputs({
        ...inputs,
        depositMethod: "????????????",
        limitCycle: "?????? 10???",
        amountPerCycle: 0,
        goalAmount: 0,
      });
    } else {
      setInputs({
        ...inputs,
        depositMethod: "????????????",
        limitCycle: "",
        amountPerCycle: 0,
        goalAmount: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.depositMethod]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: ["amountPerCycle", "goalAmount"].includes(name)
        ? Number(value)
        : value,
    });
  };

  const isActive = (method) => {
    if (method === "????????????") {
      return !Object.keys(inputs).filter(
        (x) => x !== "currentAmount" && ["", 0].includes(inputs[x])
      ).length;
    } else {
      return !Object.keys(inputs).filter(
        (x) =>
          !["amountPerCycle", "limitCycle", "currentAmount"].includes(x) &&
          ["", 0].includes(inputs[x])
      ).length;
    }
  };

  return (
    <Container>
      <BackHeader path={-1} />
      <Content>
        <div className="Title">?????? ?????????</div>
        <div className="Text">
          ?????? ???????????? <span className="l_space">?????? {avgCnt}???</span>???
          ????????? ????????????.
        </div>
        <InputEl>
          <div className="SubTitle">?????? ??????</div>
          <Category inputs={inputs} setInputs={setInputs} />
        </InputEl>
        <GoalName>
          <div className="SubTitle">?????? ??????</div>
          <CustomInput
            name="goalName"
            placeholder="?????? ????????? ??????????????????"
            onChange={onChange}
            value={inputs.goalName}
          />
          <div className="Notice">???) ????????????</div>
        </GoalName>
        <InputEl>
          <div className="SubTitle">?????? ??????</div>
          <DatePick inputs={inputs} setInputs={setInputs} />
          <div className="Notice">
            <span className="Empasis">1</span>?????? ?????? ???????????? ?????????
            ???????????????.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">?????? ??????</div>
          <SelectBox name="depositMethod" inputs={inputs} setInputs={setInputs}>
            <div>????????????</div>
            <div>????????????</div>
          </SelectBox>
          <div className="Notice">
            <span className="Empasis r_space">????????????</span> ?????????, ??? ??????
            <span className="Empasis l_space">?????????</span>??? ?????? ??? ?????????!
          </div>
          {inputs.depositMethod === "????????????" && (
            <>
              <SubSelectBox>
                <SelectBox
                  name="limitCycle"
                  inputs={inputs}
                  setInputs={setInputs}
                >
                  <div>?????? 10???</div>
                  <div>?????? ?????????</div>
                  <div>??????</div>
                </SelectBox>
              </SubSelectBox>
              <InputEl>
                <div className="SubTitle">?????????</div>
                <CustomInput
                  type="number"
                  name="amountPerCycle"
                  placeholder="??????????????? ?????? ????????? ??????????????????."
                  onChange={onChange}
                  onBlur={() => {
                    setInputs({
                      ...inputs,
                      goalAmount: inputs.eDate !== "" ? calcAmount(inputs) : 0,
                    });
                  }}
                  value={
                    inputs.amountPerCycle === 0 ? "" : inputs.amountPerCycle
                  }
                  onWheel={(e) => e.target.blur()}
                />
              </InputEl>
            </>
          )}
        </InputEl>
        <InputEl>
          <div className="SubTitle">?????? ??????</div>
          <CustomInput
            type="number"
            placeholder="?????? ????????? ??????????????????."
            disabled={inputs.depositMethod === "????????????"}
            value={inputs.goalAmount === 0 ? "" : inputs.goalAmount}
            onChange={onChange}
            name="goalAmount"
            onWheel={(e) => e.target.blur()}
          />
          <div className="Notice">
            ?????? <span className="Empasis l_space">10 ??????</span>?????? ?????? ???
            ?????????.
          </div>
        </InputEl>
        <InputEl>
          <div className="SubTitle">????????????</div>
          <CustomInput disabled={true} value={inout[0].accountName} />
        </InputEl>
      </Content>

      <CustomBtn
        path={"complete"}
        data={{ props: inputs, name: "??????" }}
        active={isActive(inputs.depositMethod)}
      >
        ?????? ????????? ??????
      </CustomBtn>
    </Container>
  );
}

export default Goal;
