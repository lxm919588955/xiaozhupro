import React from 'react';

export default class Detail extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<h1>定制小包团</h1>
			</div>
		)
	}
	componentWillReceiveProps(a){
		
	}
	
	componentDidMount(){
		console.log("dd")
	}
}