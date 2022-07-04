const usersList = [
  {
    id: "21-71264703",
    info: {
      join_date: "2021-08-01",
      key: 48,
      name: "김민수",
      phone: "01012345678",
      unit: "11사단 화랑부대",
      accounts: [],
    },
  },
  {
    id: "11-22222222",
    info: {
      join_date: "2021-08-01",
      key: 48,
      name: "김민수",
      phone: "01012345678",
      unit: "11사단 화랑부대",
      accounts: [
        {
          id: 1,
          bankName: "KB국민",
          accountName: "KB나라사랑우대통장",
          accountNumber: "112-0330-0201",
          currentAmount: 500000,
          accountType: "입출금",
          bankImageUrl:
            "https://raw.githubusercontent.com/BuenCamino3rd/test/0e4636ad19708f8cb18cecc869e0a7ef618c0adf/image/kb.svg",
        },
        {
          id: 3,
          bankName: "KB국민",
          productName: "KB장병내일우대적금",
          accountNumber: "112-0330-0201",
          currentAmount: 100000,
          goalAmount: 2500000,
          accountType: "예적금",
          bankImageUrl:
            "https://raw.githubusercontent.com/BuenCamino3rd/test/0e4636ad19708f8cb18cecc869e0a7ef618c0adf/image/kb.svg",
          createdDate: "Sun Oct 10 2021 15:11:39 GMT+0900",
          expirationDate: "Fri Mar 10 2023 23:59:59 GMT+0900",
        },
      ],
    },
  },
];

export default usersList;
