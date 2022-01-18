// pages/mycollect/mycollect.js
const util = require("../../utils/util")
var app = getApp();
// 引入SDK核心类
var QQMapWX = require('../../qqmap-wx-jssdk.js');
// 实例化API核心类
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    this.setData({
      openid: app.globalData.openid
    })
    console.log(app.globalData.openid)
    // 查询当前用户数据，注意where查询字段前有下划线
    wx.cloud.database().collection('myinfo').where({
      _openid: app.globalData.openid
    }).get({
      success(res) {
        console.log(res.data)
        var list = res.data
        for (var i in list) {
          console.log(list[i].collectlist)
          that.setData({
            mycollectlist: list[i].collectlist
          })
        }
      }
    })
  },
  //删除收藏点
  delete_collect(e) {
    var that = this
    console.log(this.data.mycollectlist)
    for (var i in this.data.mycollectlist) {
      console.log(this.data.mycollectlist[i])
      const db = wx.cloud.database()
      const _ = db.command
      //pull数组更新操作符
      if ((this.data.mycollectlist[i].openid == app.globalData.openid) && (this.data.mycollectlist[i].addressname == e.currentTarget.dataset.text)) {
        //splice()函数，i表示下标，1表示替换长度，删除操作
        this.data.mycollectlist.splice(i, 1)
        db.collection('myinfo').doc(app.globalData.openid).update({
          data: {
            collectlist: this.data.mycollectlist,
            iscollected: false
          },
          success(res) {
            wx.showToast({
              title: '删除成功',
            })

          }
        })
      }
    }

  },
  //路线规划（数据库）
  goaddress(e) {
    var that = this
    console.log(e)
    console.log(e.currentTarget.dataset.text)
    let plugin = requirePlugin('routePlan');
    var key = 'VDUBZ-LMOEX-Y7J4V-TIIKL-U2H62-JLFGY'; //使用在腾讯位置服务申请的key
    var referer = 'neu_living'; //调用插件的app的名称
    var themeColor = '#7B68EE'; //主题颜色
    let startPoint = JSON.stringify({ //起点
      'name': '当前位置',
      'latitude': '',
      'longitude': ''
    });
    console.log(this.data.mycollectlist)
    for (var i in this.data.mycollectlist) {
      console.log(this.data.mycollectlist[i])
      if (this.data.mycollectlist[i].addressname == e.currentTarget.dataset.text) {
        let endPoint = JSON.stringify({ //终点
          'name': this.data.mycollectlist[i].addressname,
          'latitude': this.data.mycollectlist[i].latitude,
          'longitude': this.data.mycollectlist[i].longitude
        });
        wx.navigateTo({
          url: 'plugin://routePlan/route-plan?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint + '&themeColor=' + themeColor
        });
      }
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
  }
})