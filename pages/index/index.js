// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

    
    hair:[
      "http://150.158.91.141:8080/images/hair0.png",
      "http://150.158.91.141:8080/images/hair1.png",
      "http://150.158.91.141:8080/images/hair2.png",
      "http://150.158.91.141:8080/images/hair3.png",
      "http://150.158.91.141:8080/images/hair4.png",
      "http://150.158.91.141:8080/images/hair5.png",
      "http://150.158.91.141:8080/images/hair6.png",
      "http://150.158.91.141:8080/images/hair7.png",
      "http://150.158.91.141:8080/images/hair8.png",
      "http://150.158.91.141:8080/images/hair9.png",
      "http://150.158.91.141:8080/images/hair10.png",
      "http://150.158.91.141:8080/images/hair11.png",
    ],
    clothes:[
      "http://150.158.91.141:8080/images/clothes0.png",
      "http://150.158.91.141:8080/images/clothes1.png",
      "http://150.158.91.141:8080/images/clothes2.png",
      "http://150.158.91.141:8080/images/clothes3.png",
      "http://150.158.91.141:8080/images/clothes4.png",
      "http://150.158.91.141:8080/images/clothes5.png",
      "http://150.158.91.141:8080/images/clothes6.png",
      "http://150.158.91.141:8080/images/clothes7.png",
      "http://150.158.91.141:8080/images/clothes8.png",
      "http://150.158.91.141:8080/images/clothes9.png",
      "http://150.158.91.141:8080/images/clothes10.png",
    ],
    face:[
      "http://150.158.91.141:8080/images/face0.png",
      "http://150.158.91.141:8080/images/face1.png",
      "http://150.158.91.141:8080/images/face2.png",
    ],
    trouser: [
      "http://150.158.91.141:8080/images/trouser0.png",
      "http://150.158.91.141:8080/images/trouser1.png",
      "http://150.158.91.141:8080/images/trouser2.png",
    ],

    shoes: [
      "http://150.158.91.141:8080/images/shoes0.png",
      "http://150.158.91.141:8080/images/shoes1.png",
    ],
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
      this.setData({
        h: getApp().globalData.h,
        f: getApp().globalData.f,
        shirt: getApp().globalData.shirt, 
        trous: getApp().globalData.trous,
        shoe: getApp().globalData.shoe,
      })
    
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //页面跳转
  jumpt:function(e){
    wx.navigateTo({
      url: String(e.currentTarget.dataset.url)		//获取传递的smile参数
    })
  },

   // 弹窗取消
   exit: function() {
    this.setData({
    showModal0: false,
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    })
   },
  //发型弹窗
  sub_hair: function() {
    this.setData({
    showModal0: true
    })
    },
  go0: function(res) { 
  console.log('你点击了', res.currentTarget.id),
  this.setData({
  showModal0: false,
  h: "http://150.158.91.141:8080/images/"+res.currentTarget.id+".png", 
  })
  },
  //表情弹窗
  sub_face: function() {
  this.setData({
  showModal1: true
  })
  },
  go1: function(res) { 
  console.log('你点击了', res.currentTarget.id),
  this.setData({
  showModal1: false,
  f: "http://150.158.91.141:8080/images/"+res.currentTarget.id+".png", 
  })
  },
  // 上衣弹窗
  sub_shirt: function() {
  this.setData({
  showModal2: true
  })
  },
  go2: function(res) { 
  console.log('你点击了', res.currentTarget.id),
  this.setData({
  showModal2: false,
  shirt: "http://150.158.91.141:8080/images/"+res.currentTarget.id+".png", 
  })
  },
  // 裤子弹窗
  sub_tours: function() {
  this.setData({
  showModal3: true
  })
  },
  go3: function(res) { 
  console.log('你点击了', res.currentTarget.id),
  this.setData({
  showModal3: false,
  trous: "http://150.158.91.141:8080/images/"+res.currentTarget.id+".png", 
  })
  },
  // 鞋弹窗
  sub_shoes: function() {
    this.setData({
    showModal4: true
    })
    },
  go4: function(res) { 
  console.log('你点击了', res.currentTarget.id),
  this.setData({
  showModal4: false,
  shoe: "http://150.158.91.141:8080/images/"+res.currentTarget.id+".png", 
  })
  },

  // 路由
  gogo: function (){
    wx.navigateTo({
        url: "/pages/home/home?h=" + this.data.h + "&f=" + this.data.f +  "&shirt=" + this.data.shirt + "&trous=" + this.data.trous + "&shoe=" + this.data.shoe
      })
    
  }
})

