import React from 'react';
import {BrowserRouter as Router , Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';
import Tswf from './tswf'
import Dddr from './dddr'
import Dzxbt from './dzxbt'
import aaa from '../img/d68c726603350a4aaac08c6430d94062 (1).jpg'
import '../css/travellist.css'


const bannerImage={
	backgroundRepeat:'no-repeat',
	backgroundPosition:'center',
	backgroundImage:'url('+aaa+')'
}
export default class Travel extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				
				<div className='banner' style={bannerImage}>
					<img src={aaa} style={{height:'100%',width:'100%'}}/>
				</div>
				<div className='tabbox'>
					<Router>
					<div>
						<div className='tbmenu'>
							<ul>
								<Link to={{pathname:'/tswf'}}>
									<li className='selected'>
										<i>图</i>
										<p>特色玩法</p>
									</li>
								</Link>
								<Link to={{pathname:'/dddr'}}>
									<li>
										<i>图</i>
										<p>当地达人</p>
									</li>
								</Link>
								<Link to={{pathname:'/dzxbt'}}>
									<li>
										<i>图</i>
										<p>定制小包团</p>
									</li>
								</Link>
								
							</ul>
							
							
				      		
							
						</div>
						
						<Switch>
							<Route path="/tswf" component={Tswf}></Route>
							<Route path="/dddr" component={Dddr}></Route>
							<Route path="/dzxbt" component={Dzxbt}></Route>
							<Redirect to='/tswf'/>
				      	</Switch>
						
						
						
					</div>
					</Router>
				</div>
				
				
				
				
				
			</div>
		)
	}
	componentWillReceiveProps(a){
		
	}
	
	componentDidMount(){
		console.log("aa")
	}
}
