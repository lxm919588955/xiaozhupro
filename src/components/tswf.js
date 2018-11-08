import React from 'react';
import '../css/travellist.css'
import '../css/tswf.css'
export default class Detail extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className='container'>
					<div className='selector'>
						<div className='item'>
							<div className='item_left'>
								城市
							</div>
							<div className='item_right' style={{borderTop:0}}>
								<ul>
									<li><a className='selected'>全部</a></li>
									<li><a>里米尼</a></li>
									<li><a>摩德纳</a></li>
									<li><a>波西塔诺</a></li>
									<li><a>梵蒂冈</a></li>
									<li><a>奇维塔韦基亚</a></li>
									<li><a>庞贝</a></li>
									<li><a>阿尔贝洛贝罗</a></li>
									<li><a>阿尔盖罗</a></li>
									<li><a>比尔积极</a></li>
									<li><a>摩德纳</a></li>
									<li><a>波西塔诺</a></li>
									<li><a>梵蒂冈</a></li>
									<li><a>奇维塔韦基亚</a></li>
									<li><a>庞贝</a></li>
									<li><a>阿尔贝洛贝罗</a></li>
									<li><a>阿尔盖罗</a></li>
									<li><a>里米尼</a></li>
									<li><a>摩德纳</a></li>
									<li><a>波西塔诺</a></li>
									<li><a>梵蒂冈</a></li>
									<li><a>奇维塔韦基亚</a></li>
									<li><a>庞贝</a></li>
									<li><a>阿尔贝洛贝罗</a></li>
									<li><a>阿尔盖罗</a></li>
								</ul>
								<div className='more'>
									<span style={{display:'block'}}>更多</span>
									<span style={{display:'none'}}>收起</span>
								</div>
							</div>
						</div>
						<div className='item'>
							<div className='item_left'>
								玩法类型
							</div>
							<div className='item_right'>
								<ul>
									<li><a className='selected'>全部</a></li>
									<li><a>一日游</a></li>
									<li><a>接送机</a></li>
									<li><a>向导服务</a></li>
									<li><a>当地体验</a></li>
									<li><a>多日游</a></li>
								</ul>
							</div>
						</div>
						<div className='item'>
							<div className='item_left'>
								是否带车
							</div>
							<div className='item_right'>
								<ul>
									<li><a className='selected'>全部</a></li>
									<li><a>带车</a></li>
									<li><a>不带车</a></li>
								</ul>
							</div>
						</div>
						<div className='item'>
							<div className='item_left'>
								价格
							</div>
							<div className='item_right'>
								<ul>
									<li><a className='selected'>全部</a></li>
									<li><a>0-999元</a></li>
									<li><a>1000-1999元</a></li>
									<li><a>2000-2999元</a></li>
									<li><a>5000元以上</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className='containerr'>
					<div className='box'>
						<div style={{marginLeft: '-26px'}}>
							<div className='list'>
								<a className='abg'>
									<img src="https://pic.8pig.com/avatar/u_21/8321/ba9f10b05565a5a3005e7df0111cfd582.JPG@58w_58h_1e_1c" width="58" height="58" alt="豆豆" style={{borderRadius:'58px'}} />
								</a>
							</div>
						</div>
						
					</div>
					
				</div>
				
				
				
				
				
			</div>
		)
	}
	componentWillReceiveProps(a){
		
	}
	
	componentDidMount(){
		console.log("cc")
	}
}