const PREFIX = "https://cors-anywhere.herokuapp.com/"
export default async function asyncFetch(url){
  const response =await  fetch(PREFIX+url, {
		method: 'GET',
		headers: {
			'origin': 'your-rapidapi-key',
		},
	})
  const data = await response.json()
  return data
}