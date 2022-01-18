/*publish.js*/
const app = getApp()
Page({
  data: {
    isdisable: false
  },
  //获取输入的信息
  getvalue(e) {
    console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
  },
  //为数据库添加数据
  submitData(e) {
    var that = this
    if (that.data.inputValue == null) {
      this.setData({
        isdisable: true
      })
      console.log(this.data.isdisable)
    } else {
      console.log(e.detail.value)
      wx.cloud.database().collection('message').add({
        data: {
          username: app.globalData.userInfo.nickName,
          faceimg: app.globalData.userInfo.avatarUrl,
          content: this.data.inputValue,
          prizelist: [],
          isPrize: false,
          time: Date.now()
        },
        //回调函数
        success(res) {
          console.log(res)
          wx.navigateBack({
            success(res) {
              wx.showToast({
                title: '发布成功',
              })
            }
          })
        }
      })
    }
  }
})