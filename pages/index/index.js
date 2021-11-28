// index.js
var app = getApp();
// 引入SDK核心类
var QQMapWX = require('../../qqmap-wx-jssdk.js');
// 实例化API核心类
var qqmapsdk;
Page({
   //设置下拉刷新
   onPullDownRefresh:function(){
        var that=this;
        that.setData({
          currentTab:0
        })
        this.onLoad();
   },
  data: {
    //轮播图
    carouselImgUrls:[
      "../../images/school1.jpg",
      "../../images/school02.jpg",
      "../../images/school1.jpg"
    ],
    //引用app.js包map
    buildData:app.globalData.map,
    hidden:true,
    //设置markers
    markers:[],
    //地标数据数组
    dorm_data:[],
    study_data:[],
    eat_data:[],
    play_data:[],
    trans_data:[],
    sport_data:[],
    //起始地址
    startPoint:null,
    endPoint:null,
    //获取分类，弹窗数据源
    currentdatabase:null,
    img:null,
    name:null,
    title:null,
    modaladdress:null,
  },
  //设置按钮点击事件
  dormitory:function(){
      var that=this
      var result=that.data.dorm_data;
      var number=that.data.markers.length;
      let markers=that.data.markers
      markers.splice(1,number-1)
      that.setData(
        {markers:markers,
        currentdatabase:result}
      )
      for(var i=0;i<result.length;i++){
        let lat = result[i].latitude;
        let lon = result[i].longitude;
        let name = result[i].name;
        var index="markers["+(i+1)+"]";
        that.setData({
          [index]:{
            id:i+1,
            latitude: lat,
            longitude: lon,
            iconPath: "../../images/dorm_icon.png",
            width: 30,
            height: 30,
            label: {
              content: name,
              color: '#FFFFFF',
              bgColor:'#6495ED',
              fontSize: 13,
              anchorX:10,
              anchorY:-23,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#6495ED',
              padding: 2,
              //display: 'ALWAYS'
            }
          }            
        })
      }

  },
  study:function(){
    var that=this;
    var result = that.data.study_data;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../images/study_icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  eat:function(){
    var that=this;
    var result = that.data.eat_data;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../images/play_icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  play:function(){
    var that=this;
    var result = that.data.play_data;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../images/eat_icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  transport:function(){
    var that=this;
    var result = that.data.trans_data;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../images/transport_icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  sport:function(){
    var that=this;
    var result = that.data.sport_data;
    var number = that.data.markers.length;
    let markers = that.data.markers
    markers.splice(1,number-1)
    that.setData({
      markers:markers,
      currentdatabase:result
    })
        for(var i=0;i<result.length;i++){
          let lat = result[i].latitude;
          let lon = result[i].longitude;
          let name = result[i].name;
          var index="markers["+(i+1)+"]";
          that.setData({
            [index]:{
              id:i+1,
              latitude: lat,
              longitude: lon,
              iconPath: "../../images/sport_icon.png",
              width: 30,
              height: 30,
              label: {
                content: name,
                color: '#FFFFFF',
                bgColor:'#6495ED',
                fontSize: 13,
                anchorX:16,
                anchorY:-22.5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#6495ED',
                padding: 2,
                //display: 'ALWAYS'
              }
            }            
          })
        }
  },
  //点击地点进行路径规划
  onPointTap: function(e) {
    console.log(e)
    var that = this;
    var lat = ''; // 获取点击的markers经纬度
    var lon = ''; // 获取点击的markers经纬度
    var name = ''; // 获取点击的markers名称
    var markerId = e.detail.markerId;// 获取点击的markers  id
    var markersda = this.data.markers;
    var currentdatabase = this.data.currentdatabase;
    //定位所点击的坐标点
    for (var item of markersda){
      if (item.id === markerId) {
        lat = item.latitude;
        lon = item.longitude;
        name = item.label.content;
        break;
      }
    }
    //初始化起点为西大门门口
    var startPoint = JSON.stringify({
      'name': markersda[0].callout.content,
      'latitude': markersda[0].latitude,
      'longitude': markersda[0].longitude
    });
    var endPoint = JSON.stringify({  //终点
        'name': name,
        'latitude': lat,
        'longitude': lon
    });
    if(currentdatabase[markerId-1].title != null)
    {
      that.setData({
        hidden:false,
        modalname:currentdatabase[markerId-1].title
      })
    }else{
      that.setData({
        hidden:false,
        modalname:currentdatabase[markerId-1].name
      })
    }
    that.setData({
      hidden:false,
      modaladdress:currentdatabase[markerId-1].address,
      startPoint:startPoint,
      endPoint:endPoint
    })
  },
  // 路径规划
  test:function(){
    let plugin = requirePlugin('routePlan');
    let key = 'VDUBZ-LMOEX-Y7J4V-TIIKL-U2H62-JLFGY';  //使用在腾讯位置服务申请的key
    let referer = 'neu_living';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
        'name': '广东东软学院',
        'latitude': 23.136364,
        'longitude': 113.025731
    });
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },
  //获取自己当前的位置
  getmyPlace:function(){
    var that=this;
    wx.getLocation({
      success: function(res) {
        console.log(res);
        that.setData({
          markers:[
            {
              latitude:res.latitude,
              longitude:res.longitude,
              iconPath:"../../images/myaddress.png",
              width:25,
              height:25,
              callout:{
                content:"当前位置",
                color:'#0000ff',
                fontSize:13,
                borderRadius:5,
                borderWidth:1,
                borderColor:'#0000ff',
                padding:2,
                display:'ALWAYS'
              }
            }
          ]
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //判断所在位置是否在校区内
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
          key: 'VDUBZ-LMOEX-Y7J4V-TIIKL-U2H62-JLFGY'
      });
      var that = this;
      var dorm = that.data.buildData[0].data;
      var study = that.data.buildData[1].data;
      var eat = that.data.buildData[2].data;
      var play = that.data.buildData[3].data;
      var tran = that.data.buildData[4].data;
      var sport = that.data.buildData[5].data;
      that.setData({
        dorm_data:dorm,
        eat_data:eat,
        study_data:study,
        play_data:play,
        trans_data:tran,
        sport_data:sport,
      })
      //判断所在位置是否在校区内
      wx.getLocation({
		 type:'gcj02',
        success:function(res)
        {
          // console.log(res)
          var nowlatitude = res.latitude
          var nowlongitude = res.longitude
          if((nowlatitude > 23.130979) && (nowlatitude < 23.147883) && (nowlongitude > 113.015018) && (nowlongitude < 113.047546))
          {
            that.setData({
              markers:[
                {
                  id:0,
                  latitude:nowlatitude,
                  longitude:nowlongitude,
                  iconPath:"../../images/myaddress.png",
                  width:25,
                  height:25,
                  callout:{
                    content:"我在这里",
                    color:'#FFFF00',
                    fontSize:13,
                    borderRadius:10,
                    borderWidth:1,
                    borderColor:'#1E90FF',
                    padding:3,
                    display:'ALWAYS'
                  }
                }
              ]
            })
          }else{
            wx.showModal({
              title:'提示',
              content:'是否切换到主校区？',
              success(res)
              {
                if(res.confirm)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:23.136452,
                        longitude:113.025657,
                        iconPath:"../../images/myaddress.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"学校大门",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'BYCLICK'
                        }
                      }
                    ]
                  })
                }else if(res.cancel)
                {
                  that.setData({
                    markers:[
                      {
                        id:0,
                        latitude:nowlatitude,
                        longitude:nowlongitude,
                        iconPath:"../../images/myaddress.png",
                        width:25,
                        height:25,
                        callout:{
                          content:"当前位置",
                          color:'#0000ff',
                          fontSize:13,
                          borderRadius:5,
                          borderWidth:1,
                          borderColor:'#0000ff',
                          padding:2,
                          display:'ALWAYS'
                        }
                      }
                    ]
                  })
                }
              }
            })

          }
        }
      });
  },
  // 使用 wx.createMapContext 获取 map 上下文
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },
  // 设置点聚合
  initMarkerCluster:function(){
    this.mapCtx.initMarkerCluster({
      enableDefaultStyle:true,
      zoomOnClick:true,
      gridSize:20,
      complete(res){
        console.log('initMarkerCluster',res)
      }
    })
  },
  //打印所有关于点击对象的信息
  clickButton: function (e) {
    //console.log(this.data.fullscreen)
    this.setData({ fullscreen: !this.data.fullscreen })
  },
  modalcancel:function(e)
  {
    this.setData({
      hidden:true,
    })
  },
  modalconfirm:function(e)
  {
    var that = this;
    this.setData({
      hidden:true,
    })
    //路径规划
    var plugin = requirePlugin('routePlan');
    var key = 'VDUBZ-LMOEX-Y7J4V-TIIKL-U2H62-JLFGY';  //使用在腾讯位置服务申请的key
    var referer = 'neu_living';   //调用插件的app的名称
    var themeColor = '#7B68EE';  //主题颜色
    var endPoint = that.data.endPoint;
    var startPoint = that.data.startPoint;
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&endPoint=' + endPoint  + '&startPoint='+ startPoint + '&themeColor=' + themeColor
  });
  }
})