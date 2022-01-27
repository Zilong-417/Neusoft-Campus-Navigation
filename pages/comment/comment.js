// pages/comment/comment.js
//引入util模块用于时间格式化
const util = require("../../utils/util")
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    var that = this
    //desc倒序 asc正序
    wx.cloud.database().collection('message').orderBy('time', 'desc').get({
      success(res) {
        console.log(res)
        //格式化时间
        var list = res.data
        for (var i in list) {
          list[i].time = util.formatTime(new Date(list[i].time))
        }
        that.setData({
          mess_list: list
        })
      }
    })
  },
  //显示个人信息
  go_info: function (res) {
    var that=this
    console.log(res.currentTarget.dataset.text)
    wx.cloud.database().collection('myinfo').where({
     _openid: res.currentTarget.dataset.text
    }).get({
      success(res) {
        console.log(res.data)
        var info_list = res.data
        that.setData({
          infolist: info_list,
          isInfoTrue: true
        })
      }
    })
   
  },
  //关闭个人信息
  hideInfo: function () {
    this.setData({
      isInfoTrue: false
    })
  },
  //跳转到发布信息页面
  go_publish: function () {
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      wx.navigateTo({
        url: '/pages/publish/publish',
      })
    }
  },
  //设置下拉刷新
  onPullDownRefresh: function () {
    var that = this
    that.setData({
      currentTab: 0
    })
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  //点赞
  prizeaction(event) {
    //console.log(event.currentTarget.dataset.id)
    if (app.globalData.userInfo == null) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 1000,
        mask: false,
      })
    } else {
      // console.log(event)
      //查询是否有点赞记录
      console.log(event.currentTarget.dataset.id)
      //doc查询id
      wx.cloud.database().collection('message').doc(event.currentTarget.dataset.id).get({
        success(res) {
          console.log(res)
          var action = res.data
          var tag = false
          var index
          for (var i in action.prizelist) {
            if (action.prizelist[i].openid == app.globalData.openid) {
              tag = true
              index = 0
              break
            }
          }
          if (tag) {
            //splice()函数，index表示下标，1表示替换长度，删除操作
            action.prizelist.splice(index, 1)
            //之前点赞过，删除点赞记录
            console.log(action)
            wx.cloud.database().collection('message').doc(event.currentTarget.dataset.id).update({
              data: {
                prizelist: action.prizelist,
                isPrize: false
              },
              success(res) {
                console.log(res)
                wx.showToast({
                  title: '取消成功',
                })
              }
            })
          } else {
            //之前未点赞过，添加点赞记录
            var user = {}
            user.username = app.globalData.userInfo.nickName
            user.faceimg = app.globalData.userInfo.avatarUrl
            user.openid = app.globalData.openid
            action.prizelist.push(user)
            console.log(action.prizelist)
            wx.cloud.database().collection('message').doc(event.currentTarget.dataset.id).update({
              data: {
                prizelist: action.prizelist,
                isPrize: true
              },
              success(res) {
                console.log(res)
                wx.showToast({
                  title: '点赞成功',
                })
              }
            })
          }
        }
      })
    }
  }


})