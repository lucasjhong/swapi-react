import { FC, useState } from 'react';
import SidebarData from './SidebarData';
import './Sidebar.scss';
import { useNavigate } from 'react-router-dom';
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar: FC = () => {
	const [toggle, setToggle] = useState<boolean>(true);
	const [selected, setSelected] = useState<string>('People');

	let navigate = useNavigate();

	const handleSelect = (title: string): void => {
		setSelected(title);
		navigate(`/${title}`);
	};

	const handleToggle = (): void => {
		setToggle(!toggle);
	};

	return (
		<>
			{!toggle && (
				<div className='menu-icon'>
					<div className='icon'>
						<MenuIcon onClick={() => handleToggle()} />
					</div>
				</div>
			)}

			<div className={toggle ? 'sidebar active' : 'sidebar'}>
				<ul>
					<li className='sidebar-top' onClick={() => handleToggle()}>
						<div className='icon'>
							<BackIcon />
						</div>
						<p>Hide</p>
					</li>

					{SidebarData.map((item, index) => {
						return (
							<li
								key={index}
								onClick={() => handleSelect(item.title)}
								className={selected === item.title ? 'active' : undefined}
							>
								<div className='icon'>{item.icon}</div>
								{item.title}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
