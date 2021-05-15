import './box.styles.scss';
const Box  = (props) => {
	return (
	<div className={`app__box app__box-${props.cases.status} ${props.cases.reverse ? 'reverse':''}`}>
      <h2 className={`app__case-type ${props.cases.reverse ? 'reverse__child':''}`}>{props.cases.title}</h2>
      <span className={`app__count ${props.cases.reverse ? 'reverse__child':''}`}>{props.cases.count}</span>
    </div>);
};
export default Box;