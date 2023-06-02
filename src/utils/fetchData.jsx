export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com/exercises/bodyPartList'
    }
  };

export const fetchData= async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}