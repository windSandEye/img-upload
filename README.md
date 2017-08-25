# img-upload
自定义react图片上传组件


| 属性名      | 说明          |类型      | 默认值 |可选值|
| --         | --            | --     |--      |--   |
| imgTitle   |组件的中文描述   | String  |""     |      |
| height     |图片外框的高度   | String  |200px  |      |
| renderState|图片初始化状态   | String  |init   |init,loading,upload|
| imgSrc     |图片src路径     | String  |""     |      |
| titleClass |文本描述信息的样式| String  |""     |      |
| disabled   |是否禁用组件     | Boolean |false  |true或false  |
| accept     |接受的图片类型   | String  | "*"   |jpg,png,gif等 |

| 事件        | 说明          |参数      | 返回值 |
| --         | --            | --      |--     | 
| getImgFile |获取图片文件信息  |         |{file:图片文件,src:图片src}|
| resetImgSrc|重置图片信息     |         |       |


## 使用方法
```jsx
 <ImgUpload 
	 imgTitle="国家首页配图(1920*470)" 
	 height="320px" 
	 id={this.props.countryInfo._id}
     imgSrc={this.props.countryInfo.bannerPath} 
     ref="bannerPath"
     renderState={this.props.countryState == "add" ? "init" : "upload"} />
```
> 我们可以根据ref获取到该组件，然后调用组件的方法获取图片文件，之后文件的保存就是你按部就班的插入数据库就行了。例如： const bannnerFile = this.refs.bannerPath.getImgFile()；

## 效果图
初始化

![这里写图片描述](http://img.blog.csdn.net/20170804100041861?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbWFmYW4xMjE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

添加图片后

![这里写图片描述](http://img.blog.csdn.net/20170804100133412?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbWFmYW4xMjE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

预览原图

![这里写图片描述](http://img.blog.csdn.net/20170804100157508?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbWFmYW4xMjE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
