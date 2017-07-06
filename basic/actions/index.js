import axios from 'axios'

export const loadData = () => {
  return (dispatch)=>{
    axios.get('http://swapi.co/api/people/')
    .then((people)=>{
      const tmpPeople = people.data.results.map((result, index) =>
      {
        return {
          key: index,
          ...result,
        }
      })
      dispatch({
        type: 'LOAD_DATA',
        payload:tmpPeople,
      })
    })
  }
}
