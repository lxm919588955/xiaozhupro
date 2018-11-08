import React from 'react';

export default class Detail extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<h1>当地达人</h1>
			</div>
		)
	}
	componentWillReceiveProps(a){
		
	}
	
	componentDidMount(){
		console.log("bb")
	}
}
