// pages/myinfo/myinfo.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    student_info: [],
    isdisable1:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    var that = this
    wx.cloud.database().collection('myinfo').where({
      _openid: app.globalData.openid
    }).get({
      success(res) {
        console.log(res.data)
        that.setData({
          student_info: res.data
        })
      }
    })
    //app.js取userinfoinfo和openid
    console.log(app.globalData.openid)
    console.log(app.globalData.userInfo)
    this.setData({
      info: app.globalData.userInfo,
      openid: app.globalData.openid
    })


  },
  //姓名
  getname(e) {
    //console.log(e.detail.value)
    
     this.data.inputname=e.detail.value
    
  },
  //学号
  getnum(e) {
    console.log(e.detail.value)
    this.data.inputnum= e.detail.value

  },
  //院系
  getcollege(e) {
    console.log(e.detail.value)
    this.data.inputcollege= e.detail.value
  },
  //专业
  getprofession(e) {
    console.log(e.detail.value)
    this.data.inputprofession= e.detail.value
  },
  //班级
  getclass(e) {
    console.log(e.detail.value)
    this.data.inputclass= e.detail.value
  },
  //保存信息按钮，向数据库添加信息
  save_info() {
    var that = this
    if (this.data.inputname ==null) {
      that.setData({
        isdisable1: true
      })
      console.log(this.data.isdisable1)
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入用户名！',
        success: function (res) {
        }
      })
      
    } else if (this.data.inputnum == null) {
      that.setData({
        isdisable1: true
      })
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入学号！',
        success: function (res) {}
      })
      
    }
    else if (this.data.inputprofession == null) {
      that.setData({
        isdisable1: true
      })
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入专业！',
        success: function (res) {
        }
      })
     
    }
    else if (this.data.inputcollege == null) {
      that.setData({
        isdisable1: true
      })
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入院系！',
        success: function (res) {
        
        }
      })
     
    }
    else if (this.data.inputclass == null) {
      that.setData({
        isdisable1: true
      })
      wx.showModal({
        title: '提示！',
        showCancel: false,
        content: '请输入班级！',
        success: function (res) {
        }
      })
      
    } else {
      const _ = wx.cloud.database().command
      wx.cloud.database().collection('myinfo').where({
        id: app.globalData.openid
      }).update({
        data: {
          sname: this.data.inputname,
          snum: this.data.inputnum,
          scollege: this.data.inputcollege,
          sprofession: this.data.inputprofession,
          sclass: this.data.inputclass,
          id: app.globalData.openid,
          isAuth: false
        },
        //回调函数
        success(res) {
          console.log(res)
          wx.navigateBack({
            success(res) {
              wx.showToast({
                title: '保存成功',
              })
            }
          })
        }
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
})