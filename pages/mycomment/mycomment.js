// pages/mycomment/mycomment.js
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
    this.setData({
      openid: app.globalData.openid
    })
    console.log(app.globalData.openid)
    // 查询当前用户数据，注意where查询字段前有下划线
    wx.cloud.database().collection('message').where({
      _openid: app.globalData.openid
    }).orderBy('time', 'desc').get({
      success(res) {
        console.log(res)
        console.log(res.data)
        //格式化时间
        var list = res.data
        for (var i in list) {
          list[i].time = util.formatTime(new Date(list[i].time))
        }
        that.setData({
          mlist: list
        })
      }
    })
  },
  //删除评论
  deleteaction(event) {
    wx.cloud.database().collection('message').doc(event.currentTarget.dataset.id).remove({
      success(res) {
        console.log(res)
        wx.showToast({
          title: '删除成功',
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
  }
})