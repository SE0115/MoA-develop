import styled from "styled-components";
import { hideScrollBar } from "style/common";
import FilterList from "../function/FilterList";
import userCompList from "mockData/userCompList";
import { useSelector } from "react-redux";

//[styled comp] : 리스트 컨테이너
const StyledMyList = styled.div`
  background-color: var(--Surface);
  height: calc(100vh - 185px);

  padding: 0 20px;

  ${hideScrollBar}
`;

//cond : 챌린지 필터링 조건
const MyList = ({ cond }) => {
  const userData = useSelector((state) => state.user);
  const compList = userCompList[userData.id];

  //챌린지 없을 때 테스트
  // const compList = [];

  return <StyledMyList>{FilterList(cond, compList)}</StyledMyList>;
};

export default MyList;
