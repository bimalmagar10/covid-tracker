import React from 'react';
import glassIcon from '../../magnifying-glass.svg';
import './search.styles.scss';
class Search extends React.Component {
	state ={
		value:''
	};
	handleChange = (event) => {
		this.setState({value:event.target.value});
	}
	handlePress = (event) => {
		if(event.key === "Enter"){
			this.props.retrieveQuery(this.state.value.toLowerCase());
			this.setState({value:''});
		}
	}
	render(){
		return (
			<div className='app__search'>
		        <span>
		            <svg className='app__icon'>
		                <use xlinkHref={`${glassIcon}#glass`}/>
		            </svg>
		        </span>
		        <input 
		          type='text' 
		          className='app__input' 
		          placeholder='Search by country'
		          onChange={this.handleChange}
		          value={this.state.value}
		          onKeyPress={this.handlePress}
		        />
    		</div>
		);
	}
}
export default Search;