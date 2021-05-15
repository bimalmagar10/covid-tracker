import './app.styles.scss';
const AppContainer = (props) => (
	<div className='container'>
          <div className='app'>
          	{props.children}
          </div>
    </div>      
);
export default AppContainer;