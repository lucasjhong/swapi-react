import React from 'react';
import { Swapi } from '../utils/api';

export const fetchData = async (
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setData: React.Dispatch<React.SetStateAction<any[]>>,
	setError: React.Dispatch<React.SetStateAction<string | null>>,
	type: string
) => {
	setLoading(true);
	try {
		switch (type) {
			case 'people': {
				const people: any = await Swapi.getPeople(1);
				console.log(people);
				setData(people.results);
				break;
			}

			case 'planets': {
				const planets: any = await Swapi.getPlanets(1);
				console.log(planets);
				setData(planets.results);
				break;
			}

			case 'starships': {
				const starships: any = await Swapi.getStarships(1);
				console.log(starships);
				setData(starships.results);
				break;
			}

			default: {
				break;
			}
		}
	} catch (err: any) {
		setError(err);
	}
	setLoading(false);
};
