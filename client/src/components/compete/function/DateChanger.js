/**
 * [function] : formatDate
 * 날짜 형식을 지정
 *
 * [args]
 * dateobj : 날짜 객체
 *
 * [return]
 * 변환된 날짜 string
 */
function formatDate(dateobj) {
  const month = dateobj.getMonth() + 1;
  const date = dateobj.getDate();
  //요일
  const dow = dateobj.toLocaleString("ko-KR", { weekday: "short" });

  const hour = dateobj.getHours();
  const min = (dateobj.getMinutes() < 10 ? "0" : "") + dateobj.getMinutes();

  const result = `${month}.${date} (${dow}) ${hour}:${min}`;

  return result;
}

export default formatDate;
