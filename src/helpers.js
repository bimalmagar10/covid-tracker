export const texts = {
  symptoms:[
    "Unusual Cough",
    "Pink Eye",
    "Breathelessness",
    "Stomach Trouble",
    "Fatigue",
    "Brain Fog"
  ],
  precautions:[
  "Clean your hands often. Use soap and water, or an alcohol-based hand rub",
  "Maintain a safe distance from anyone who is coughing or sneezing",
  "Wear a mask when physical distancing is not possible",
  "Don’t touch your eyes, nose or mouth",
  "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze",
  "Stay home if you feel unwell",
  "If you have a fever, cough and difficulty breathing, seek medical attention"
  ]
};
const thousandsDelimiter = (number) => {
	return number.toLocaleString();
};
const create = (data) => {
	return [
	   {
          title:'Confirmed Cases',
          status:'confirmed',
          count:thousandsDelimiter(data.cases),
          reverse:false
        },
        {
          title:'Recovered Cases',
          status:'recovered',
          count:thousandsDelimiter(data.recovered),
          reverse:false
        },
        {
          title:'Active Cases',
          status:'active',
          count:thousandsDelimiter(data.active),
          reverse:false
        },
        {
          title:'Death Cases',
          status:'death',
          count:thousandsDelimiter(data.deaths),
          reverse:false
        },
        {
          title:'New Cases',
          status:'new',
          count:thousandsDelimiter(data.todayCases),
          reverse:true
        }
	];
};

export const filterData = (data)=>{
	return {
		cases:create(data),
		location:{
			country:data.country ? data.country :"global",
			flag:data.countryInfo ? data.countryInfo.flag :"No flag" 
		}
	}
};