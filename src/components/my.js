import React from "react"
import '../css/xm_my.css'


export default class My extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="xm_nav_wrap">
					<div className='xm_nav'>
						<ul>
							<li><a>订单管理</a></li>
							<li><a>玩法管理</a></li>
							<li><a>账单管理</a></li>
							<li><a>收入管理</a></li>
							<li><a>车辆管理</a></li>
							<li><a>设置</a></li>
						</ul>
					</div>
					<div className="xm_wrap">
						<ul className="xm_navmain">
							<li><a>进行中</a></li>
							<li><a>已完成</a></li>
						</ul>
						<div className="xm_rig">
							<h3>
								<span>订单号</span>
								<span>8962825203087962</span>
								<span>待付款</span>
							</h3>
							<div className="xm_section">
								<img src="https://pic2.8pig.com/road/u_62/655762/CC5375428ECC1A41B79C750C70631D22.jpg@178w_134h_1e_1c"/>
								<div className="xm_section_rig">
									<p>自由行规划</p>
									<p>自由行规划</p>
									<p>1人</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
