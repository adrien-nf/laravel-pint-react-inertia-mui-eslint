import { Link, usePage } from "@inertiajs/react";
import { AppBar, Toolbar, Box, Button, Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { PageProps } from '@/types';
import { useState } from "react";

export default function Header() {
	const { props: { auth } } = usePage<PageProps>();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Box sx={{ flexGrow: 1 }} />
				{auth.user ? (
					<>
						<Button LinkComponent={Link} href={route('dashboard')} color="inherit">Dashboard</Button>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem component={Link} href={route('profile.edit')}>
									<Typography textAlign="center">Profile</Typography>
								</MenuItem>
								<MenuItem component={Link} href={route('logout')} method="post">
									<Typography textAlign="center">Logout</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</>

				) : (
					<>
						<Button LinkComponent={Link} href={route('dashboard')} color="inherit">Log in</Button>
						<Button LinkComponent={Link} href={route('register')} color="inherit">Register</Button>
					</>
				)}
			</Toolbar>
		</AppBar>
	)
}