import styled from "styled-components";
import moment from "moment";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  margin: 0 0 28px;
  box-shadow: 0px 1px 2px rgba(33, 33, 33, 0.08);
  border-radius: 12px;

  .accountInfo {
    display: flex;
    margin-bottom: 26px;
    .bgIcon {
      margin-right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: var(--Surface);
      border-radius: 10px;
    }
    .account {
      flex: 1;
      overflow: hidden;
      .shortening {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .InfoEl {
    display: flex;
    justify-content: space-between;
  }
  .InfoEl + .InfoEl {
    margin-top: 8px;
  }
  .txt_body1 {
    color: var(--Body_01);
  }
  .txt_body2 {
    color: var(--Body_02);
  }
  .txt_title2 {
    color: var(--Title_02);
    font-family: "Pretendard-Medium";
  }
  .txt_green {
    color: var(--a2);
  }
`;

function TerminationCard({ props }) {
  const accounts = useSelector((state) => state.user.info.accounts);
  const inout = accounts.filter((x) => x.accountType === "입출금");
  const interlock = accounts.filter((x) => x.accountType === "제휴");

  return (
    <Container>
      <div className="accountInfo">
        <div className="bgIcon">
          <img src={props.account.bankImageUrl} alt="logo" />
        </div>
        <div className="account">
          {props.savingMode === "군적금" ? (
            <>
              <div className="subTitle">{props.account.productName}</div>
              <div className="text txt_body2">
                {props.account.bankName} {props.account.accountNumber}
              </div>
            </>
          ) : (
            <>
              <div className="subTitle shortening">{props.goalName}</div>
              <div className="text txt_body2">
                {interlock[0].bankName} {interlock[0].accountNumber}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">만기일</div>
        <div className="txt_title2">
          {moment(props.eDate).format("YYYY.MM.DD")}
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">납입금액</div>
        <div className="txt_title2">
          {props.currentAmount.toLocaleString()} 원
        </div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">해지예상금액</div>
        <div className="txt_green">{Number(800260).toLocaleString()} 원</div>
      </div>
      <div className="InfoEl text">
        <div className="txt_body1">입금계좌</div>
        <div className="txt_title2">{inout[0].accountName}</div>
      </div>
    </Container>
  );
}

export default TerminationCard;
