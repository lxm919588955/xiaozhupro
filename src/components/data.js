import React from "react"
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export default class Data extends React.Component{
	constructor(props){
		super(props)
	}
	onChange(date, dateString) {
	  console.log(date, dateString);
	}
	render(){
		return(
			<div>
			<input type="text" style={{position:"absolute"}}/>
				<DatePicker style={{background:'red',opacity:'0'}} onChange={this.onChange.bind(this)} />
			</div>
		)
	}
}
