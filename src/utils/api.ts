import axios from 'axios';

const instance = axios.create({
	// baseURL: `http://localhost:5000`,
	baseURL: 'https://swapi-express.herokuapp.com',
	timeout: 20000,
});

export const Swapi = {
	getPeople: (page: number): Promise<any[]> =>
		instance.get(`/people?page=${page}`).then((res) => res.data),
	searchPeople: (name: string): Promise<any[]> =>
		instance.get(`/people/search?name=${name}`).then((res) => res.data),
	getPlanets: (page: number): Promise<any[]> =>
		instance.get(`/planets?page=${page}`).then((res) => res.data),
	searchPlanets: (name: string): Promise<any[]> =>
		instance.get(`/planets/search?name=${name}`).then((res) => res.data),
	getStarships: (page: number): Promise<any[]> =>
		instance.get(`/starships?page=${page}`).then((res) => res.data),
	searchStarships: (name: string): Promise<any[]> =>
		instance.get(`/starships/search?name=${name}`).then((res) => res.data),
};
