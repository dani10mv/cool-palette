const PREFIX = "https://cors-anywhere.herokuapp.com/"
export default async function asyncFetch(url){
  const response =await  fetch(PREFIX+url)
  const data = await response.json()
  return data
}