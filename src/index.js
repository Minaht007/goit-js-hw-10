// export { fetchCountries };

// const BASE_URL = 'https://restcountries.com/v3.1';

// function fetchCountries(name) {
    
//   return fetch(
//     `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });
// }

export function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}