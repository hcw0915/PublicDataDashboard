import { Toolbar, Typography, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Navbar = () => (
  <Toolbar
    sx={{
      bgcolor: '#651FFF',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 16px 10px 16px',
      width: '100%',
      height: '48px',
      boxShadow: '0 7px 10px rgba(0,0,0,0.20)',
    }}
  >
    <Typography
      variant="h"
      noWrap
      component="div"
      sx={{ flexGrow: 1, fontWeight: '700' }}
    >
      LOGO
    </Typography>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{
        height: '30px',
        width: '30px',
        borderRadius: '8px',
        border: '1px #FFFFFF solid',
      }}
    >
      <SettingsOutlinedIcon
        sx={{
          height: '16px',
          width: '16px',
        }}
      />
    </IconButton>
  </Toolbar>
);

export default Navbar;
