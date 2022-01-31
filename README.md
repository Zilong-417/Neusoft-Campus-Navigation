# Neusoft-Campus-Navigation
广东东软学院校内导航及留言小程序
## 注意：introduce_img为介绍文件，配置项目时可以删除
## 1：开发背景及需求
这个项目是我在大三上学期的移动平台开发技术课程完成的期末项目。
开发项目的主要目的是为新生提供一个便捷的校内导航和可以加深同学间沟通交流的平台。
## 2：功能点介绍
### (1) 主页
● 用户进入程序，系统成功获取用户地理信息后，若用户当前位置不在校区范围内，系统弹窗提示是否切换回主校区，切换回主校区点默认为校门口<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/index1.jpg" width="450px"  alt="判断位置"><br>
<hr>
● 用户选择点击（学习，住宿。。。）等集合按钮，地图自动显示对应集合的地点气泡<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/index2.jpg" width="450px" alt="地点气泡"><br>
<hr>
● 用户点击地点气泡后，弹出弹窗提醒，弹窗内显示该点位置信息及包含收藏该点的按钮<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/index3.jpg" width="450px" alt="地点信息"><br>
<hr>
● 用户点击前往即可调出路线规划<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/index4.jpg" width="450px" alt="路线规划"><br>

### (2) 吐槽页面
● 用户点击屏幕右下方发布内容按钮可进行内容发布，若输入内容为空，系统弹出Toast提醒并且按钮失效<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/comment2.jpg" width="450px" alt="发布内容"><br>
<hr>
● 用户可查看自己和他人的评论，并且可以点赞<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/comment1.jpg" width="450px" alt="内容显示"><br>
<hr>
● 点击用户头像显示个人信息<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/showinfo.jpg" width="450px" alt="内容显示"><br>

### (3) 我的页面
● 我的页面由点赞，吐槽，收藏点，个人信息四个功能模块构成<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/my1.jpg" width="450px" alt="我的页面"><br>
<hr>
● 用户可进行取消点赞操作<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/like1.jpg" width="450px" alt="点赞"><br>
<hr>
● 用户可进行删除评论操作<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/public.jpg" width="450px" alt="评论"><br>
<hr>
● 收藏夹显示用户的收藏点，用户可前往收藏点或者删除收藏点<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/collect.jpg" width="450px" alt="地图收藏点"><br>
<hr>
● 用户可编辑个人信息，输入限制条件为不能为空，输入失败则按钮失效<br><br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/info.jpg" width="450px" alt="个人信息"><br>

## 3：数据库配置
采用云开发方式，数据库创建有两个集合：message，myinfo<br>
### (1) message表<br>
message表存放用户名，用户头像，用户openid,用户发布的内容，发布时间，内容是否被点赞以及点赞人基本信息<br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/database1.png" width="600px" alt="message表"><br>
<hr>

### （2）myinfo表
message表存放用户基本信息（姓名，学号，班级，院系，专业），地图收藏点（坐标，地名，地址等）<br>
<img src="https://github.com/Zilong-417/Neusoft-Campus-Navigation/blob/Neu/introduce_img/database2.png" width="600px" alt="myinfo表"><br>
<hr>
