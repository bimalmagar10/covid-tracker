import './button.styles.scss';
const Button = (props) => (
	<a 
		href="/" 
		className={`app__btn app__btn--${props.type}`}
		onClick={(event) =>{
			event.preventDefault();
			props.onClick(props.text);
		}}
	>
	      {props.text} &rarr;
	</a>
);
export default Button;