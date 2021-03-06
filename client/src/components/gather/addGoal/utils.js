import moment from "moment";

export const calcAmount = (inputs) => {
  const { sDate, eDate, limitCycle, amountPerCycle } = inputs;

  switch (limitCycle) {
    case "매월 10일":
      let monthCnt = (eDate.getYear() - sDate.getYear()) * 12;
      monthCnt += eDate.getMonth() - sDate.getMonth() + 1;
      if (sDate.getDate() > 10) {
        monthCnt -= 1;
      }
      if (eDate.getDate() < 10) {
        monthCnt -= 1;
      }

      return monthCnt * amountPerCycle;

    case "매주 월요일":
      let calc_sDate = "";
      if (sDate.getDay() > 1) {
        calc_sDate = moment(sDate).day(8)._d;
      } else {
        calc_sDate = moment(sDate).day(1)._d;
      }

      const calc_eDate = moment(eDate).day(1)._d;
      const weekCnt = moment(calc_eDate).diff(moment(calc_sDate), "weeks") + 1;
      return weekCnt * amountPerCycle;

    case "매일":
      const dayCnt = calc_days(sDate, eDate);
      return dayCnt * amountPerCycle;

    default:
      break;
  }
};

export const calc_dDay = (eDate) => {
  return moment(eDate).diff(moment(), "days");
};

export const calc_days = (sDate, eDate) => {
  return moment(eDate).diff(moment(sDate), "days") + 1;
};
