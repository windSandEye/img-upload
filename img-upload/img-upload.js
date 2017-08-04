import React from 'react';
import { Icon, Modal } from 'antd';
import PropTypes from 'prop-types';
import './img-upload.css'

export default class ImgUpload extends React.Component {
  /*
    组件属性
    id:组件动态标识，表明组件是否需要修改的唯一标识
    imgTitle：组件的中文描述
    height：图片外框的高度
    imgFile:图片文件
    renderState：图片初始化状态,//init：初始化，loading:正在上传，upload：上传成功
    imgSrc:图片src路径
    isPreview: false//是否显示弹出层预览全图
    titleClass:"" //文本描述信息的样式
    getImgFile:function(name,file,path):获取图片文件，在图片文件改变时触发
  */
  constructor(props) {
    super(props)
    this.state = {
      imgFile: null,
      imgSrc: this.props.imgSrc||"",
      renderState: this.props.renderState||"init",
      isPreview: false,
      disabled:this.props.disabled || false
    }
  }

  static defaultProps = {
    imgTitle: "",
    height: "200px",
    renderState: "init",
    imgSrc: "",
    titleClass: "",
    accept:"*"
  }

  static propTypes = {
    imgTitle: PropTypes.string,
    renderState: PropTypes.oneOf(['init', 'loading', 'upload']),
    imgSrc: PropTypes.string,
    titleClass: PropTypes.string,
    accept:PropTypes.string
  };

  componentWillReceiveProps(nextProps){
    if(this.props.imgSrc != nextProps.imgSrc){
      this.setState({imgSrc:nextProps.imgSrc})
    }
    if(this.props.renderState != nextProps.renderState){
      this.setState({renderState:nextProps.renderState})
    }
    if(this.props.disabled != nextProps.disabled){
      this.setState({disabled:nextProps.disabled})
    }  

  }

  renderInit() {//初始化渲染
    return (
      <div className="img-box" style={{ height: this.props.height }}>
        <input type="file" className="img-file" onChange={this.imgChange.bind(this)} accept={this.props.accept} />
        <div className={"img-add " + this.props.titleClass}>
          <Icon type="plus" className="img-add-icon" />
          <div>{this.props.imgTitle}</div>
        </div>
      </div>
    )
  }

  renderLoading() {//正在上传
    return (
      <div className="img-box" style={{ height: this.props.height }}>
        <img src="/static/admin/img/loading.gif" className="img-loading" />
      </div>
    )
  }

  renderUpload() {//上传完成
    const imgSrc = (this.state.imgSrc&&this.state.imgSrc!="")?this.state.imgSrc:"/static/admin/img/error_img.jpg"
    const imgBox = this.state.disabled ? "img-box-preview-hide" : "img-box-preview-show"
    return (
      <div className={imgBox} style={{ height: this.props.height }}>
        <img src={imgSrc} className="img-wh" />
        <div className="img-preview">
          <Icon type="eye-o" className="img-operate" onClick={this.original.bind(this)} />
          <Icon type="delete" className="img-operate" onClick={this.deleteImg.bind(this)} />
        </div>
      </div>
    )
  }

  renderImg() {
    if (this.state.renderState === "init") {
      return this.renderInit()
    } else if (this.state.renderState === "loading") {
      return this.renderLoading()
    } else if (this.state.renderState === "upload") {
      return this.renderUpload()
    }
  }

  imgChange(event) {//获取文件图片
    this.setState({ imgFile: event.target.files[0], renderState: "loading" }, () => {
      this.previewImg()
    })
  }

  previewImg() {//本地预览
    const that = this;
    const file = this.state.imgFile;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      that.setState({ renderState: "upload", imgSrc: this.result })
    }
  }

  original() {//原图查看
    this.setState({ isPreview: true })
  }

  deleteImg() {//删除图片
    this.setState({ renderState: "init", imgFile: null, isPreview: false, imgSrc: "" })
  }

  resetImgSrc(){
    this.setState({ renderState: this.props.renderState, imgFile: null, imgSrc: this.props.imgSrc })
  }

  getImgFile() {
      return {file:this.state.imgFile,src:this.state.imgSrc}
  }

  cancelModal() {//关闭弹窗
    this.setState({ isPreview: false })
  }

  render() {
    return (
      <div>
        {this.renderImg()}
        <Modal visible={this.state.isPreview} footer={null}
          onCancel={this.cancelModal.bind(this)}
          width="auto" wrapClassName="img-center"
          style={{ display: "inline-block" }}
        >
          <img src={this.state.imgSrc} className="preview-all" />
        </Modal>
      </div>
    )
  }
}