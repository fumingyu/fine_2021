// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    h: "http://150.158.91.141:8080/images/hair0.png",
    f: "http://150.158.91.141:8080/images/face0.png",
    shirt: "http://150.158.91.141:8080/images/clothes3.png", 
    trous: "http://150.158.91.141:8080/images/trouser1.png",
    shoe: "http://150.158.91.141:8080/images/shoes0.png",
  }
})
