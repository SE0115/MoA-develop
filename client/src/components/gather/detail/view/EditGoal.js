import React, { useState } from "react";
import styled from "styled-components";
import { styleTitle, styleSubTitle, styleNotice } from "style/common";
import BackHeader from "components/common/BackHeader";
import { useLocation } from "react-router-dom";
import CustomInput from "components/common/CustomInput";
import CustomBtn from "components/gather/addGoal/CustomBtn";
import Category from "components/gather/addGoal/Category";
import DatePick from "components/gather/addGoal/DatePick";
import moment from "moment";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  text-align: left;
  .title {
    ${styleTitle}
    margin: 12px 0 16px;
  }
  .subTitle {
    ${styleSubTitle}
    padding: 0 0 4px 4px;
  }
  .notice {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 22px;
    color: var(--Body_01);
    text-align: left;
    margin: 8px 0 0 4px;
  }
  .subNotice {
    display: flex;
    ${styleNotice}
    padding: 6px 0 0 4px;
  }
  .react-datepicker__input-container {
    input::placeholder {
      color: var(--Title_01);
    }
  }
`;

const InputEl = styled.div`
  margin-bottom: 24px;
`;

function EditGoal() {
  const userData = useSelector((state) => state.user.info);

  const { state: props } = useLocation();
  const prev = props;

  const [newInputs, setNewInputs] = useState({
    ...props,
    goalName: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewInputs({
      ...newInputs,
      [name]: value,
    });
  };

  const isEdited = () => {
    const editableEls =
      props.savingMode === "군적금"
        ? ["goalName"]
        : ["category", "goalName", "eDate"];
    return (
      editableEls.filter((x) => newInputs[x] !== "" && newInputs[x] !== prev[x])
        .length > 0
    );
  };

  const applyNewInputs = (newInputs) => {
    const editableEls =
      props.savingMode === "군적금"
        ? ["goalName"]
        : ["category", "goalName", "eDate"];

    editableEls.map((x) => {
      if (newInputs[x] === "") {
        newInputs[x] = prev[x];
      }
    });
  };

  return (
    <Container>
      <BackHeader path={-1} />
      {props.savingMode === "군적금" ? (
        <Content>
          <div className="title">
            <div>{userData.name}님!</div>
            <div>군적금을 통해 무엇을 하고 싶나요?</div>
          </div>

          <CustomInput
            name="goalName"
            placeholder={prev.goalName}
            value={newInputs.goalName}
            onChange={onChange}
          />
          <div className="notice">
            예) 1000만원 모으기, 해외여행 가기, 학비로 사용하기
          </div>
        </Content>
      ) : (
        <Content>
          <div className="title">목표 수정하기</div>
          <InputEl>
            <div className="subTitle">목표 종류</div>
            <Category inputs={newInputs} setInputs={setNewInputs} />
          </InputEl>
          <InputEl>
            <div className="subTitle">목표 이름</div>
            <CustomInput
              name="goalName"
              placeholder={prev.goalName}
              value={newInputs.goalName}
              onChange={onChange}
            />
            <div className="subNotice">예) 폰바꾸기</div>
          </InputEl>
          <InputEl>
            <div className="subTitle">목표 날짜</div>
            <DatePick
              inputs={newInputs}
              setInputs={setNewInputs}
              placeholder={moment(prev.eDate).format("YYYY년 MM월 DD일")}
            />
            {/* Todo: 목표 날짜 변경 횟수 제한 걸기, 입력 아래 안내사항 텍스트 추가하기 */}
            <div className="notice"></div>
          </InputEl>
        </Content>
      )}
      <CustomBtn
        path={"complete"}
        addFunc={() => applyNewInputs(newInputs)}
        data={{
          newInputs: newInputs,
          whatEdit: "goal",
        }}
        active={isEdited()}
      >
        목표수정 완료
      </CustomBtn>
    </Container>
  );
}

export default EditGoal;
