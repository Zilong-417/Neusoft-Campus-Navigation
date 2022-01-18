// app.js
const app = getApp()
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
    //云函数开发初始化
    wx.cloud.init({
      env: "cloud1-5gz3bdfjf89b9380"
    })
    //将本地缓存存入全局变量中
   if(wx.getStorageSync('openid')){
      this.globalData.openid=wx.getStorageSync('openid')
    }
    if(wx.getStorageSync('userInfo')){
      this.globalData.userInfo=wx.getStorageSync('userInfo')
    }
    //调用云函数获取openid
    var that = this
    wx.cloud.callFunction({
      name: 'getUserOpenid',
      success(res) {
        console.log(res.result.openid)
        console.log(res)
        that.globalData.openid = res.result.openid
      }
    })
  },
  //数据集合（用户微信个人信息，地图坐标数据）
  globalData: {
    userInfo: null,//用户信息
    openid: null,//用户openID
    avatarUrl: '',//头像
    map: [
      //宿舍
      {
        "name": "东软宿舍",
        "scale": 16,
        "data": [{
            latitude: 23.134884,
            longitude: 113.023739,
            name: "教师公寓",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.13415,
            longitude: 113.0225711,
            name: "JAVA1",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.134488,
            longitude: 113.022501,
            name: "JAVA2",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.134794,
            longitude: 113.022462,
            name: "JAVA3",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.144269,
            longitude: 113.030664,
            name: "1栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.14406,
            longitude: 113.030314,
            name: "2栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.143893,
            longitude: 113.029982,
            name: "3栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.14382,
            longitude: 113.030974,
            name: "4栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.14402,
            longitude: 113.030816,
            name: "5栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.143737,
            longitude: 113.030304,
            name: "6栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.143562,
            longitude: 113.030444,
            name: "7栋",
            address: "南海区阳光在线广场西100米(万锦路南)"
          },
          {
            latitude: 23.143709,
            longitude: 113.029734,
            name: "8栋",
            address: "华南师范大学南海校区公交站东(万锦路南)"
          },
          {
            latitude: 23.143328,
            longitude: 113.029935,
            name: "9栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.14334,
            longitude: 113.030656,
            name: "10栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.14273,
            longitude: 113.031142,
            name: "11栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.142507,
            longitude: 113.030973,
            name: "12栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.142254,
            longitude: 113.030963,
            name: "14栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.142014,
            longitude: 113.031034,
            name: "15栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.142064,
            longitude: 113.030049,
            name: "16栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141662,
            longitude: 113.030221,
            name: "17栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141421,
            longitude: 113.029956,
            name: "18栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141144,
            longitude: 113.029663,
            name: "19栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.140588,
            longitude: 113.028789,
            name: "20栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.140775,
            longitude: 113.029432,
            name: "21栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.140932,
            longitude: 113.029916,
            name: "22栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141526,
            longitude: 113.029227,
            name: "23栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141155,
            longitude: 113.028923,
            name: "24栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.141155,
            longitude: 113.028923,
            name: "25栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.138003,
            longitude: 113.026513,
            name: "26栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.1387,
            longitude: 113.025821,
            name: "27栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.13896,
            longitude: 113.025755,
            name: "28栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.139494,
            longitude: 113.025474,
            name: "29栋",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.138989,
            longitude: 113.026435,
            name: "30栋",
            address: "广东省佛山市南海区万锦路"
          }
        ]
      },
      //学习
      {
        "name": "东软学习",
        "scale": 16,
        "data": [{
            latitude: 23.136799,
            longitude: 113.024301,
            name: "图书馆",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.136281,
            longitude: 113.022341,
            name: "教学楼E座",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.135514,
            longitude: 113.022424,
            name: "教学楼F座",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.135514,
            longitude: 113.022424,
            name: "教学楼F座",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.139556,
            longitude: 113.024169,
            name: "教学楼AB座",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.137006,
            longitude: 113.026145,
            name: "继续教育学院",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.136712,
            longitude: 113.025985,
            name: "创新楼",
            address: "广东省佛山市南海区南海软件科技园内(广东东软学院)"
          },
          {
            latitude: 23.13753,
            longitude: 113.023825,
            name: "C座",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.136195,
            longitude: 113.025343,
            name: "D座",
            address: "广东省佛山市南海区万锦路"
          }
        ]
      },
      //美食
      {
        "name": "东软美食",
        "scale": 16,
        "data": [{
            latitude: 23.141118,
            longitude: 113.028489,
            name: "早餐店",
            address: "广东省佛山市南海区鸿基路"
          },
          {
            latitude: 23.134806,
            longitude: 113.023294,
            name: "东软第二，第五饭堂",
            address: "广东省佛山市南海区鸿基路"
          },
          {
            latitude: 23.143248,
            longitude: 113.031262,
            name: "东软第一，第三饭堂",
            address: "广东省佛山市南海区阳光路"
          },
          {
            latitude: 23.137072,
            longitude: 113.025795,
            name: "东软第四饭堂",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.136597,
            longitude: 113.02417,
            name: "SOVO BOX咖啡",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.139938,
            longitude: 113.024167,
            name: "茶百道",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.142886,
            longitude: 113.031236,
            name: "酸奶水果捞",
            address: "广东省佛山市南海区万锦路"
          }
        ]
      },
      //生活服务
      {
        "name": "东软生活服务",
        "scale": 16,
        "data": [{
            latitude: 23.134906,
            longitude: 113.023134,
            name: "梦星空校园服务站",
            address: "广东省佛山市南海区鸿基路"
          },
          {
            latitude: 23.144229,
            longitude: 113.032044,
            name: "菜鸟驿站",
            address: "广东省佛山市南海区阳光路"
          },
          {
            latitude: 23.143493,
            longitude: 113.032557,
            name: "菜鸟驿站",
            address: "广东省佛山市南海区阳光路东"
          },
          {
            latitude: 23.143725,
            longitude: 113.031818,
            name: "阳光在线广场",
            address: "广东省佛山市南海区阳光路"
          },
          {
            latitude: 23.139335,
            longitude: 113.024873,
            name: "行政楼",
            address: "广东东软学院"
          }
        ]
      },
      //交通
      {
        "name": "东软交通",
        "scale": 16,
        "data": [{
            latitude: 23.136426,
            longitude: 113.025835,
            name: "校门交通站牌",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.143752,
            longitude: 113.028878,
            name: "华师校门交通站牌",
            address: "广东省佛山市南海区万锦路"
          }
        ]
      },
      //运动
      {
        "name": "东软运动",
        "scale": 16,
        "data": [{
            latitude: 23.137504,
            longitude: 113.022991,
            name: "操场",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.139457,
            longitude: 113.023393,
            name: "湖边篮球场",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.135689,
            longitude: 113.023141,
            name: "篮球场",
            address: "广东省佛山市南海区万锦路"
          },
          {
            latitude: 23.138266,
            longitude: 113.023829,
            name: "体育馆",
            address: "广东省佛山市南海区万锦路"
          }
        ]
      }
    ]
  }
})