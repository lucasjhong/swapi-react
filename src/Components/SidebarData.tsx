import PersonIcon from '@mui/icons-material/Person';
import PlanetIcon from '@mui/icons-material/Public';
import StarshipIcon from '@mui/icons-material/Navigation';

interface SidebarItem {
	title: string;
	icon: any;
	link: string;
}

const SidebarData: SidebarItem[] = [
	{
		title: 'People',
		icon: <PersonIcon />,
		link: '/people',
	},
	{
		title: 'Planets',
		icon: <PlanetIcon />,
		link: '/planets',
	},
	{
		title: 'Starships',
		icon: <StarshipIcon />,
		link: '/starships',
	},
];

export default SidebarData;
