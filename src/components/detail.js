import React from 'react'
import '../css/th-index.css'
import "../css/font_hsyqg1spsip/iconfont.css"
import Liu from '../img/liu.jpg'
export default class Detail extends React.Component{
	constructor(props){
		super(props)
	}
	tap(){
		this.props.history.push('/cart')
	}
	render(){
		return(
			<div>
				<p id="th-nav"><span>首页</span> > <span>泰国</span> > <span>甲米</span></p>
				<div id="th-man" >
					<div className="_left man-l">
						
						<img className="mam-img" alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/>
						<ul className="man-list-img">
							<li><img alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/></li>
							<li><img alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/></li>
							<li><img alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/></li>
							<li><img alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/></li>
							<li><img alt="" src="https://pic2.8pig.com/road/u_72/586572/51651449CDEA50E00DA1839DFC457E46.jpg@1e_1c_624w_468h"/></li>
						</ul>
						<div className="man-menu">
							<a href="www.baidu.com">达人推荐</a>
							<a href="www.baidu.com">行程详情</a>
							<a href="www.baidu.com">价格说明</a>
							<a href="www.baidu.com">预定须知</a>
							<a href="www.baidu.com">用户评价<span>(4)</span></a>
						</div>
						<img alt="" className="man-liu" src={Liu}/>
						<h2>达人推荐</h2>
						<p className="man-text">边玩边拍，提供车辆，中文摄影师，全程无忧</p>
						<h2>行程详情</h2>
						<div className="man-travel">
							<p className="man-text"><span className="radio"></span>  Day1  大城府</p>
							<div className="man-travel-text">
								<p className="man-text">玛哈泰寺,拉布拉多寺,夏日行宫</p>
								<p className="man-text">拉布拉多寺是一座著名的宏伟宝塔，建于公元1424 年，也是是大城王朝的七世王所建。</p>
								<p className="man-text">拉布拉多寺李埋葬了以前的国王和王子,穿过只剩下一面墙壁的大门,老远就能看见宝塔,古老而宏伟,方for进入遥远的时空,周围是残损的佛堂围墙,支离破碎的佛陀,参天的大树和闭目微笑的佛像.</p>
								<div className="man-img">
									<img alt="" src="https://pic2.8pig.com/road/u_74/19774/B9991D5CFDD1BF21F21CF57337E85F8A.jpg@1e_1c_190w_142h"/>
									<img alt="" src="https://pic2.8pig.com/road/u_74/19774/B9991D5CFDD1BF21F21CF57337E85F8A.jpg@1e_1c_190w_142h"/>
									<img alt="" src="https://pic2.8pig.com/road/u_74/19774/B9991D5CFDD1BF21F21CF57337E85F8A.jpg@1e_1c_190w_142h"/>
								</div>
								<p className="man-text"><i className="iconfont icon-daojishishizhong"></i>开始时间:07:30 <i className="iconfont icon-shalou"></i>:600分钟</p>
								<p className="man-text"><i className="iconfont icon-location"></i> 游玩地点: 大城府</p>
							</div>
						</div>
						<h2>价格说明</h2>
						<div className="man-pri-info">
							<p className="man-text">1) 396 元/次 带车 10座中巴 外语司机 含讲解 当地司机、中文导游</p>
							<p className="basic-info">基本信息:</p>
							<p className="basic-info">价格备注: 当地司机,中文导游</p>
							<p className="basic-info">接待人数: 1-7人</p>
							<p className="basic-info">是否含车: 是</p>
							<p className="basic-info">车型信息:10座中巴</p>
							<p className="basic-info">可在人数及行李: 7人 4件行李</p>
							<p className="basic-info">司机语言: 外文</p>
							<p className="basic-info">服务时长: 10.0小时</p>
							<p className="basic-info">服务里程数: 600公里</p>
						</div>
						<div className="man-pri-info">
							<p className="man-text">价格包含:</p>
							<p className="basic-info">停车费: 是</p>
							<p className="basic-info">路桥费: 是</p>
							<p className="basic-info">车辆使用费: 是</p>
							<p className="basic-info">燃油费: 是</p>
							<p className="basic-info">讲解服务费: 是</p>
						</div>
						<div className="man-pri-info">
							<p className="man-text"><i className="iconfont icon-deng"></i>温馨提示:07:30-08:00 曼谷酒店接人,出发前往大城府</p>
							<p className="man-text">09:30 玛哈泰寺,参观高棉遗址</p>
							<p className="man-text">10:30 三王庙,参观大城王朝的玉佛寺</p>
							<p className="man-text">11:30 出发前往拉布拉多寺</p>
							<p className="man-text">12:30 午餐（自理)</p>
							<p className="man-text">13:30 出发前往夏日行宫（这是曼谷王朝最大最漂亮的行宫)</p>
							<p className="man-text">14:30 出发前往拉布拉多寺</p>
							<p className="man-text">16:30 出发前往拉布拉多寺</p>
							<p className="man-text">17:30 出发前往拉布拉多寺</p>
							<p className="man-text">预订人数:最多不超过12人</p>
						</div>
						<div className="man-pri-info">
							<p className="basic-info">费用包含:</p>
							<p className="basic-info">1:中文导游服务费</p>
							<p className="basic-info">1:中文导游服务费</p>
							<p className="basic-info">1:中文导游服务费</p>
							<p className="basic-info">1:中文导游服务费</p>
							<p className="basic-info">1:中文导游服务费</p>
						</div>
						<div className="man-pri-info">
							<p className="basic-info">费用不包含:</p>
							<p className="basic-info">1:导游和司机小费</p>
							<p className="basic-info">2:中文导游服务费</p>
							<p className="basic-info">3:中文导游服务费</p>
							<p className="basic-info">4:接送区域外额外车费</p>
						</div>
						<h2>预定须知</h2>
						<div className="man-pri-info">
							<p className="basic-info">向导服务/一日游/多日游/当地体验退订政策</p>
							<p className="basic-info">3日内（含第3日）服务退订政策</p>
							<p className="basic-info">出发前7天以上（不含第7天）取消订单，可全额退款；</p>
							<p className="basic-info">出发前72小时以上-7天内取消订单，扣除订单金额的30%</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
						</div>
						<div className="man-pri-info">
							<p className="basic-info">向导服务/一日游/多日游/当地体验退订政策</p>
							<p className="basic-info">3日内（含第3日）服务退订政策</p>
							<p className="basic-info">出发前7天以上（不含第7天）取消订单，可全额退款；</p>
							<p className="basic-info">出发前72小时以上-7天内取消订单，扣除订单金额的30%</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
						</div>
						<div className="man-pri-info">
							<p className="basic-info">向导服务/一日游/多日游/当地体验退订政策</p>
							<p className="basic-info">3日内（含第3日）服务退订政策</p>
							<p className="basic-info">出发前7天以上（不含第7天）取消订单，可全额退款；</p>
							<p className="basic-info">出发前72小时以上-7天内取消订单，扣除订单金额的30%</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
							<p className="basic-info">出发前24小时以上-72小时内取消订单，扣除订单金额的50%；</p>
						</div>
						<h2>用户评价</h2>
						<div className="msg">
							<div className="user-info">
								<img className="user-head" src="https://pic.8pig.com/avatar/u_90/771490/f21006e864158fd950d5b24cf5f7be38.jpg@66w_66h_1e_1c"/>
								<div>
									<p><span className="_left">珊瑚翁</span><span className="_right">2018-8-17</span></p>
									<p><img className="star" src="http://p0.so.qhimgs1.com/bdr/200_200_/t01ab31894de3de4890.png"/></p>
								</div>
							</div>
							<p className="user-msg">挺好,很便宜</p>
						</div>
						<div className="msg">
							<div className="user-info">
								<img className="user-head" src="https://pic.8pig.com/avatar/u_90/771490/f21006e864158fd950d5b24cf5f7be38.jpg@66w_66h_1e_1c"/>
								<div>
									<p><span className="_left">珊瑚翁</span><span className="_right">2018-8-17</span></p>
									<p><img className="star" src="http://p0.so.qhimgs1.com/bdr/200_200_/t01ab31894de3de4890.png"/></p>
								</div>
							</div>
							<p className="user-msg">挺好,很便宜</p>
						</div>
						<div className="msg">
							<div className="user-info">
								<img className="user-head" src="https://pic.8pig.com/avatar/u_90/771490/f21006e864158fd950d5b24cf5f7be38.jpg@66w_66h_1e_1c"/>
								<div>
									<p><span className="_left">珊瑚翁</span><span className="_right">2018-8-17</span></p>
									<p><img className="star" src="http://p0.so.qhimgs1.com/bdr/200_200_/t01ab31894de3de4890.png"/></p>
								</div>
							</div>
							<p className="user-msg">挺好,很便宜</p>
						</div>
						
					</div>
					<div className="_right man-r">
						<img alt="" className="erweima" src="https://pic.8pig.com/img/pc/new/detail_method_qrcode.png"/>
						<span className="weixin"><img alt="" className="erweima1" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHE8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyZGQxejhVaks4UFQxUUZ4RnhyMWYAAgSpJuBbAwSAOgkA"/></span>
						<p className="router">玛哈泰寺-三王庙-拉布拉多寺-夏日行宫</p>
						<p className="sort">泰国  大城府  |  自然风光  休闲玩乐  历史遗迹</p>
						<p className="price"><span>396</span><span>元/次</span><a>价格说明</a></p>
						<p className="choice">带车 10座中巴 外语司机 韩讲解 当地司机 中文导游</p>
						<button onClick={this.tap.bind(this)}>立即预定</button>
						<hr/>
						<div className="man-r-list">
							<div className="_left res">
								<p>评价数: <span>2909</span></p>
								<p>回复率: <span>78%</span></p>
							</div>
							<div className="_right heard">
								<i className="iconfont icon-xin"></i>
								<div className="">
									<p>2人</p>
									<p>已收藏</p>
								</div>
							</div>
						</div>
						<div className="service">
							<p className="advise">您有疑问?想了解当地?需要定制行程?赶紧咨询我吧</p>
							<div className="advise-person">
								<img src="https://pic.8pig.com/avatar/u_74/19774/C65F85D414276A01B2E648D27885044F.jpg@56w_56h_1e_1c"/>
								<div>
									<p>达人晓燕</p>
									<p>专业翻译,环球旅行专家打算大苏打大大实打实的</p>
								</div>
								<button className="btn">咨询达人</button>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		)
	} 
}
