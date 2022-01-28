import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import './CardItem.scss';

interface Props {
	data: any;
	index: number;
}

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const CardItem: React.FC<Props> = ({ data, index }) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const description = Object.entries(data).map(([key, value]) => {
		return (
			<p>
				{key}: {Array.isArray(value) ? value.toString() : value}
			</p>
		);
	});

	return (
		<Card className='Card'>
			<CardHeader
				action={<IconButton aria-label='settings'></IconButton>}
				title={data.name}
				subheader=''
			/>
			{/* <CardContent></CardContent> */}
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>{description}</CardContent>
			</Collapse>
		</Card>
	);
};

export default CardItem;
