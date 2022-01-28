import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';
import CardItem from '../Components/CardItem';
import { Swapi } from '../utils/api';
import './SearchPage.scss';

type Props = {};

const Planets = (props: Props) => {
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [nextPage, setNextPage] = useState<number>(1);
	const [nextAvailable, setNextAvailable] = useState<boolean>(false);
	const [searchInput, setSearchInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(event.target.value);
	};

	const fetchData = async (type: string, page?: number) => {
		setLoading(true);
		setData([]);

		try {
			switch (type) {
				// Case get page, set next page if it exists
				case 'get': {
					const res: any = await Swapi.getPlanets(nextPage);
					console.log(res);
					setData(res.results);
					setNextAvailable(res.next);
					setNextPage(nextPage + 1);
					break;
				}

				// Case search, search input
				case 'search': {
					const res: any = await Swapi.searchPlanets(searchInput);
					console.log(res);
					setData(res.results);
					setNextAvailable(res.next);
					break;
				}

				default: {
					break;
				}
			}

			setLoading(false);
		} catch (err: any) {
			setError(err);
		}
	};

	useEffect(() => {
		fetchData('get');
	}, []);

	return (
		<div className='main'>
			<TextField
				id='standard-basic'
				label='Search'
				variant='standard'
				sx={{ width: '40%' }}
				onChange={handleChange}
			/>
			<div className='button-layout'>
				<Button variant='contained' onClick={() => fetchData('search')}>
					Search
				</Button>
			</div>
			<div className='card-layout'>
				{error && <h3>{error}</h3>}
				{data.map((item, index) => {
					return <CardItem data={item} index={index} />;
				})}
			</div>
			{loading && <CircularProgress />}

			{nextAvailable && (
				<Button variant='contained' onClick={() => fetchData('get')} sx={{ margin: '10vh' }}>
					Get More
				</Button>
			)}
		</div>
	);
};

export default Planets;
