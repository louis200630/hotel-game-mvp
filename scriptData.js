const gameScript = [
    {
      id: 1, 
      text: "您好，歡迎光臨！\n請問您有訂房紀錄嗎？",
      options: [
        { text: "有的，這是我的證件", nextSceneId: 2 },
        { text: "呃...我好像沒訂", nextSceneId: 3 }
      ]
    },
    {
      id: 2,
      text: "好的，查詢到了。\n請問您打算如何支付？",
      options: [
        { text: "信用卡 (有優惠)", nextSceneId: 4 },
        { text: "付現", nextSceneId: 5 },
        { text: "太貴了，我不付了", nextSceneId: 3 }
      ]
    },
    {
      id: 3,
      text: "【結局 1：流落街頭】\n您決定不住宿了，轉身離開了飯店...",
      options: [
        { text: "重新開始", nextSceneId: 1 }
      ]
    },
    {
      id: 4,
      text: "【結局 2：尊爵體驗】\n刷卡成功！\n恭喜您免費升等至總統套房！",
      options: [
        { text: "重新開始", nextSceneId: 1 }
      ]
    },
    {
      id: 5,
      text: "【結局 3：平凡的一晚】\n您付了現金，住進了標準雙人房。",
      options: [
        { text: "重新開始", nextSceneId: 1 },
        { text: "我想去櫃檯升級房間", nextSceneId: 4 }
      ]
    }
  ];
  
  // 把這個劇本設為此檔案的「主角」匯出
  export default gameScript;