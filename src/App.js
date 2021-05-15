import React from 'react';

//Helpers
import {filterData} from './helpers';

//Components
import AppContainer from './components/app/app.component';
import Header from './components/header/header.component';
import Search from './components/search/search.component';
import Box from './components/box/box.component';
import InfoContainer from './components/info/info.component';

class App extends React.Component {
  //Initialization with dummy data
  state = {
      cases:[
        {
          title:'Confirmed Cases',
          status:'confirmed',
          count:'11,987,321',
          reverse:false
        },
        {
          title:'Recovered Cases',
          status:'recovered',
          count:'9,232,456',
          reverse:false
        },
        {
          title:'Active Cases',
          status:'active',
          count:'20,123,456',
          reverse:false
        },
        {
          title:'Death Cases',
          status:'death',
          count:'4,453,216',
          reverse:false
        },
        {
          title:'New Cases',
          status:'new',
          count:'4,453,216',
          reverse:true
        }
      ],
      location:{
        country:'Nepal',
        flag:'https://disease.sh/assets/img/flags/np.png'
      },
      error:false
  };
  async componentDidMount(){
    const {cases,location} = await this.fetchData("all");

    this.setState({cases:cases,location:location,error:false});
    
  }
  componentWillUnmount(){
    console.log("unmounted");
  }
  fetchData = async (query) => {
      let uri;
      if(query === "all"){
        uri = "covid-19";
      } else {
        uri = "covid-19/countries"
      }
      try {
        const fetched = await fetch(`https://disease.sh/v3/${uri}/${query}`)
        if(!fetched.ok){
          throw Error(fetched.statusText);
        }
        const response = await fetched.json();
        const datas = await response;
        return filterData(datas);
      } catch (err){
        this.setState({error:true});
      }
  }
  
  retrieveQuery = async (value) => {
    try {
       const {cases,location} = await this.fetchData(value);
      this.setState({cases,location,error:false});
    } catch(err){
       this.setState({error:true});
    }
  }

  render(){
      const cases = this.state.cases.map((c,index)=> (
        <Box cases={c} key={index}/>
      ));
      return (
           <AppContainer>
              <Header/>
              <Search retrieveQuery={this.retrieveQuery}/> 
              {this.state.error ? <div className='error'>Enter valid country!</div> : null}
              {cases}
              <InfoContainer location={this.state.location}/>
          </AppContainer>
      );
  }
}

export default App;
