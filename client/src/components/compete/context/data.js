const allCompList = {
  compList: [
    {
      key: "A1",
      due: new Date("2022-01-14T21:00:00"),
      thumb: "music.png",
      title: "오늘 뮤직뱅크 1위는?",
      versus: ["아이유", "BTS"],
      totalkey: [13, 29],
      total: 100,
      win: true,
    },
    {
      key: "A2",
      due: new Date("2022-03-15T21:00:00"),
      thumb: "worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      totalkey: [84, 59],
      total: 50,
      win: false,
    },
    {
      key: "A4",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는1?",
      versus: ["맨시티", "리버풀"],
      totalkey: [77, 29],
      total: 320,
      win: false,
    },
    {
      key: "A5",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는2?",
      versus: ["맨시티", "리버풀"],
      totalkey: [23, 29],
      total: 320,
      win: false,
    },
    {
      key: "A6",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는3?",
      versus: ["맨시티", "리버풀"],
      totalkey: [88, 29],
      total: 320,
      win: false,
    },
    {
      key: "A7",
      due: new Date("2022-01-26T21:00:00"),
      thumb: "game.png",
      title: "롤챔스 경기 승자는?",
      versus: ["NS", "DK"],
      totalkey: [15, 29],
      total: 300,
      win: false,
    },
  ],
};

const myCompList = {
  compList: [
    {
      key: "B1",
      due: new Date("2022-01-14T21:00:00"),
      thumb: "music.png",
      title: "오늘 뮤직뱅크 1위는?",
      versus: ["아이유", "BTS"],
      totalkey: [13, 29],
      total: 100,
      bet: 3,
      pick: true,
      win: true,
    },
    {
      key: "B2",
      due: new Date("2022-03-15T21:00:00"),
      thumb: "worldsoccer.png",
      title: "월드컵 예선 승자는?",
      versus: ["벨기에", "스페인"],
      totalkey: [13, 29],
      total: 50,
      bet: 1,
      pick: false,
      win: false,
    },
    {
      key: "B3",
      due: new Date("2022-01-28T21:00:00"),
      thumb: "soccer.png",
      title: "프리미어리그 경기 승자는?",
      versus: ["맨시티", "리버풀"],
      totalkey: [13, 29],
      total: 320,
      bet: 4,
      pick: true,
      win: false,
    },
    {
      key: "B4",
      due: new Date("2022-01-26T21:00:00"),
      thumb: "game.png",
      title: "롤챔스 경기 승자는?",
      versus: ["NS", "DK"],
      totalkey: [13, 29],
      total: 300,
      bet: 4,
      pick: true,
      win: false,
    },
  ],
};

export { myCompList, allCompList };