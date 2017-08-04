# img-upload
自定义react图片上传组件


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
