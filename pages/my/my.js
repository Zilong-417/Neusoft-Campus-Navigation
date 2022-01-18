// pages/my/my.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAuth: false, //是否授权
    userInfo: [] //用户信息
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //判断用户是否授权 如已授权直接从全局app.js当中取信息
    let user = app.globalData.userInfo
    if (user) {
      this.setData({
        userInfo: user,
        isAuth: true 
      })
    }
  },
  //获取用户授权及创建个人信息表
  getInfo(e) {
    wx.getUserProfile({
      desc: '用于个人信息页面的个人信息展示',
      success: (res) => {
        console.log(res)
        app.globalData.userInfo = res.userInfo
        console.log(res.userInfo)
        console.log(app.globalData.openid)
        //存入本地缓存中，已经在app.js中申明
        wx.setStorageSync('userInfo', res.userInfo)
        //当登录后创建个人信息表（已存在该用户则跳转首页）
        const db = wx.cloud.database()
        const _ = db.command
        db.collection('myinfo').where({
          _openid: app.globalData.openid
        }).get({
          success(res) {
            if (res.data.length == 0) {
              wx.cloud.database().collection('myinfo').doc(app.globalData.openid).set({
                data: {
                  sname: '请输入姓名',
                  snum: '请输入学号',
                  scollege: '请输入学院名',
                  sprofession: '请输入专业',
                  sclass: '请输入班级',
                  collectlist: [], //地图收藏点
                  id: app.globalData.openid
                }
              })
            }else {
              wx.switchTab({
                url: '/pages/index/index',
              })
            }
          }
        })
        this.setData({
          userInfo: res.userInfo,
          isAuth: true
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      }
    })
  },
  //跳转到我的点赞页面
  my_comment() {
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      wx.navigateTo({
        url: '/pages/mylike/mylike',
      })
    }
  },
  //跳转到我的留言页面
  my_message() {
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      wx.navigateTo({
        url: '/pages/mycomment/mycomment',
      })
    }
  },
  //跳转到我的信息页面
  my_info() {
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      wx.navigateTo({
        url: '/pages/myinfo/myinfo',
      })
    }
  },
  //跳转到我的收藏界面
  my_collect() {
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      wx.navigateTo({
        url: '/pages/mycollect/mycollect',
      })
    }
  }
})