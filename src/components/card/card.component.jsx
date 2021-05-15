import {texts} from '../../helpers';
import './card.styles.scss';

const Card = (props) => {
	const items = texts[props.active].map((item,index) => (
 			<li className="app__lists--item" key={index}>&nbsp;{item}</li>
	));
	return (
		<div className="app__card">
		 	<button 
		 		className="app__btn--tertiary"
		 		onClick={props.onClick}
		 	>
		 		&larr; Back
		 	</button>
		 	<ul className="app__lists">
		 	  {items}
		 	</ul>
		</div>
	);
};

export default Card;