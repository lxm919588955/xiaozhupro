import React from "react"
import '../css/cart.css'
import Xiaoyan from "../img/xiaoyan.jpg"
import { Calendar } from 'antd';
import moment from 'moment';
 import 'moment/locale/zh-cn';
export default class Cart extends React.Component{
	constructor(props){
		super(props)
	}
		

	

	render(){
		return(
			<div style={{width:'100%',height:'100%',background:'#EDEFED',overflow:'hidden'}}>
				<div  id="th-man">
					<div className="_left man-l">
						<h2>预定:马哈泰斯-三王寺-拉布拉多寺-夏日行宫</h2>
						<div className="temple">
							<img alt="" src="https://pic2.8pig.com/road/u_74/19774/5462BC4731E442E7D3AFC618E02A3993.jpg@178w_134h_1e_1c"/>
							<div className="th-text">
								<h3>马哈泰斯-三王寺-拉布拉多寺-夏日行宫</h3>
								<p>大城夏日行宫又称挽巴茵夏宫、班帕因夏宫等。它位于泰国古都大城以南25公里，湄南河左岸。从公元1350年的...</p>
							</div>
							<a>查看玩法详情</a>
						</div>
						<div className="goway">
							<div className="servise-sort"> 
								<label name="way">选择服务类型</label>
								<input name="way" type="radio" checked="checked"/>
								<span>￥396/次 带车 10座中巴 外语司机 含讲解 当地司机、中文导游</span>
							</div>
							<div className="data">
								<label name="day">日期</label>
								<div>
									<p>出行(当地时间)</p>
									<p>选择日期</p>
								</div>
								<div>
									<p>返程(当地时间)</p>
									<p>选择日期</p>
								</div>
							</div>
							<div className="numperson">
								<label name="day">人数</label>
								<p><span>-</span><span>1</span><span>+</span></p>
							</div>
						</div>
						<div className="th-phone">
							<label name="day">联系方式</label>
							<div className="per-detail">
								<p>真实姓名:</p>
								<input type="text" placeholder="请输入真实姓名"/>
								<p>手机号码:</p>
								<input type="text" placeholder="请输入手机号码"/>
							</div>
						</div>
						<div className="th-msg">
							<p>给达人[晓燕]发送消息</p>
							<textarea placeholder="请问可以预定吗?"></textarea>
						</div>
						<a className="th-btn">提交</a>
						  
					</div>
					<div className="_right man-r">
						<div className="yan">
							<img alt="" src={Xiaoyan}/>
							<a href="#" className="seemore">查看更多</a>
						</div>
						<div className="car">
							<span className="goods-pri">￥125</span>
							<img alt="" src="https://pic.8pig.com/road/u_74/19774/90cb01093e20b399791c1bf68b8fe2ef.jpg@437w_291h_1e_1c"/>
							<p>曼谷素万那普 廊曼 芭提雅 普吉接送机</p>
							<p><span>泰国 曼谷</span><span>接送机</span><span>2909条评论</span></p>
						</div>
						<div className="car">
							<span className="goods-pri">￥125</span>
							<img alt="" src="https://pic.8pig.com/road/u_74/19774/90cb01093e20b399791c1bf68b8fe2ef.jpg@437w_291h_1e_1c"/>
							<p>曼谷素万那普 廊曼 芭提雅 普吉接送机</p>
							<p><span>泰国 曼谷</span><span>接送机</span><span>2909条评论</span></p>
						</div>
						<div className="car">
							<span className="goods-pri">￥125</span>
							<img alt="" src="https://pic2.8pig.com/road/u_74/19774/735F3E04C7CE9D7FD6215B553ACBE5DA.jpg@437w_291h_1e_1c"/>
							<p>曼谷素万那普 廊曼 芭提雅 普吉接送机</p>
							<p><span>泰国 曼谷</span><span>接送机</span><span>2909条评论</span></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
