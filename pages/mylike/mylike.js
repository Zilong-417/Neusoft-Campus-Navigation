// pages/mylike/mylike.js
const util = require("../../utils/util")//调用时间格式
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  //监听页面加载
  onLoad: function (event) {
    var that = this
    this.setData({
      openid: app.globalData.openid
    })
    console.log(app.globalData.openid)
    //desc倒序 asc正序
    //message表存放点赞信息，个人信息
    const _ = wx.cloud.database().command
    wx.cloud.database().collection('message').where({
      prizelist:_.elemMatch({
        openid:_.eq(app.globalData.openid)
      })
    }).orderBy('time', 'desc').get({
      success(res) {
        console.log(res)
        //格式化时间
        var list = res.data
        for (var i in list) {
          list[i].time = util.formatTime(new Date(list[i].time))
        }
        var list = res.data
        console.log(list)
        that.setData({
          mylike_list: list
        })
      }
    })
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
  //删除点赞记录
  mylike_deleteaction(e) {
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    const db= wx.cloud.database()
    const _ = db.command
    //pull数组更新操作符
    db.collection('message').doc(e.currentTarget.dataset.id).update({
      data: {
         isPrize:false,
         prizelist:_.pull({
           openid:_.eq(app.globalData.openid)
         })
      },
      success(res) {
        console.log(res)
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },
})