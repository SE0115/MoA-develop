import React, { useState } from "react";
import AccountFound from "../comp/AccountFound";
import AccountInfo from "../comp/AccountInfo";
import SetGoal from "../comp/SetGoal";
import { useSelector } from "react-redux";
import filterAccount from "../../profile/function/filterAccount";

const InterLock = () => {
  const [step, setStep] = useState(1);

  const setStepWrapper = (input) => {
    setStep(input);
  };
  const userData = useSelector((state) => state.user.info);
  const filteredAccounts = filterAccount(userData.accounts);

  return (
    <div>
      {step === 1 && (
        <AccountFound
          func={setStepWrapper}
          name={userData.name}
          count={
            filteredAccounts.inout.length + filteredAccounts.install.length
          }
        ></AccountFound>
      )}
      {step === 2 && (
        <AccountInfo
          accounts={filteredAccounts}
          func={setStepWrapper}
        ></AccountInfo>
      )}
      {step === 3 && (
        <SetGoal name={userData.name} accounts={filteredAccounts}></SetGoal>
      )}
    </div>
  );
};

export default InterLock;
