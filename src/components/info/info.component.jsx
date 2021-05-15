import React from 'react';
import Button from '../button/button.component';
import Card from '../card/card.component';
import './info.styles.scss';

class InfoContainer extends React.Component{
	state ={
		active:''
	};
	handleClick = (value) => {
		value = value.toLowerCase();
		this.setState({active:value});
	}
	handleReset = () => {
		this.setState({active:''});
	}
	render () {
		if(this.state.active === ''){
			return (	
				<div className='app__info'>
				    <div 
				    	className='app__country' 
				    	style={{justifyContent:`${this.props.location.country === 'global' ? 'center':'space-between'}`}}
				    >
				        <div 
				        	className='app__country-name'
				        	style={{marginRight:`${this.props.location.country === 'global' ? '0':'1rem'}`}}
				        >
				          <span>Country:</span>
				          <span>{this.props.location.country}</span>
				        </div>
				        {
				        	this.props.location.country.toLowerCase() === "global" ? null : (
				        	<div className='app__country-flag'>
				          		<img src={this.props.location.flag} className='app__img' alt='This is country flag'/>
				        	</div>
				        	)        
				        }
				    </div>
				    <Button type='primary' text='Symptoms' onClick={this.handleClick}/>
				    <Button type='secondary' text='Precautions' onClick={this.handleClick}/>
		    	</div>
			);
		} else {
			return (
				<div className="app__info">
					<Card active={this.state.active} onClick={this.handleReset}/>
				</div>
			);
		}
	}
}
export default InfoContainer;