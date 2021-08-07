import * as React from 'react';
//Material-ui imports
import { styled, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';


const drawerWidth = 220;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius='20px',
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginRight: theme.spacing(2),
  marginLeft: '120px',
  width: '100%',
  height: '50px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(20),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#B1B1B1;'
}));

const HeaderContainer = styled('div')({
  width: '100%',
  display: 'flex',
  padding: '30px 0'
});

const IconContainer = styled('div')({
  alignItems: 'center',
});

const Icon = styled('div')({
  padding: '0 11px',
});

const AccountAvatar = styled(Avatar)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius='20px',
  width: '60px',
  height: '58px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#B1B1B1;',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '35px',
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledAppBar = styled(AppBar)`
  & > div {
    background-color: #F1F3F4;
  }
`;

export default function Header(props: any) {
  const {open, handleDrawerOpen} = props;
  return (
    <>
      <StyledAppBar elevation={0} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: '#663399',
              left: '105px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderContainer>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <IconContainer sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
              <Icon>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.82955 2.11306C9.77348 2.11306 9.71689 2.09561 9.66876 2.05859L8.28403 0.999285V7.60331H15.1343L14.0742 6.21859C13.9853 6.10222 14.0075 5.93667 14.1234 5.84781C14.2397 5.75895 14.4048 5.78116 14.4941 5.897L15.8789 7.70751C15.9513 7.80219 15.9524 7.93389 15.8789 8.02857L14.4941 9.83908C14.4428 9.90678 14.3635 9.94328 14.2847 9.94328C14.2286 9.94328 14.172 9.92583 14.1239 9.88827C14.007 9.79941 13.9853 9.63333 14.0736 9.51749L15.1342 8.13224H8.28403V15.1347L9.66982 14.0742C9.78618 13.9853 9.95173 14.0081 10.0406 14.1234C10.1295 14.2397 10.1072 14.4053 9.9914 14.4942L8.18089 15.8794C8.13223 15.9164 8.07616 15.9339 8.01957 15.9339C7.96297 15.9339 7.90638 15.9164 7.85877 15.8794L6.04879 14.4942C5.93243 14.4058 5.91074 14.2397 5.9996 14.1234C6.08793 14.007 6.25401 13.9843 6.37038 14.0742L7.7551 15.1339V8.13224H0.997956L2.05858 9.51855C2.14743 9.63439 2.12522 9.80047 2.00939 9.88933C1.96125 9.92583 1.90466 9.94328 1.84859 9.94328C1.76925 9.94328 1.69044 9.90784 1.63861 9.83961L0.253352 8.0291C0.18036 7.93442 0.18036 7.80272 0.253352 7.70804L1.63861 5.89753C1.72747 5.78169 1.89302 5.75948 2.00939 5.84834C2.12522 5.9372 2.14743 6.10275 2.05858 6.21911L0.998895 7.60331H7.7551V0.998476L6.36932 2.05859C6.25348 2.14745 6.0874 2.12523 5.99854 2.0094C5.90968 1.89356 5.9319 1.72748 6.04773 1.63862L7.85772 0.252833C7.95292 0.180371 8.0841 0.180371 8.1793 0.252833L9.98981 1.63862C10.1056 1.72695 10.1279 1.89303 10.0385 2.0094C9.98823 2.0771 9.90889 2.11306 9.82955 2.11306Z" fill="#663399"/>
                </svg>
                </Icon>
              <Icon>
                <Badge badgeContent={3} sx={{color: '#663399'}}>
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.01827 1.76779C7.94768 1.62247 7.90807 1.45944 7.90807 1.28735C7.90807 0.678979 8.40315 0.183899 9.01152 0.183899C9.62007 0.183899 10.115 0.678979 10.115 1.28735C10.115 1.45944 10.0754 1.62247 10.0048 1.7678C11.9621 2.21945 13.4253 3.97619 13.4253 6.06896V10.4827C13.4253 13.4525 14.1462 14.8965 15.6322 14.8965C15.8345 14.8965 16 15.0613 16 15.2644C16 15.4674 15.8345 15.6322 15.6322 15.6322H11.56C11.3811 16.8785 10.3066 17.8391 9.01152 17.8391C7.71659 17.8391 6.64196 16.8785 6.46299 15.6322H2.39083C2.18853 15.6322 2.02301 15.4674 2.02301 15.2644C2.02301 15.0613 2.18853 14.8965 2.39083 14.8965C3.8768 14.8965 4.59772 13.4525 4.59772 10.4827V6.06896C4.59772 3.97618 6.06093 2.21943 8.01827 1.76779ZM9.01152 2.3908C6.98338 2.3908 5.33335 4.04082 5.33335 6.06896V10.4827C5.33335 11.4089 5.33335 13.7092 4.20342 14.8965L6.80462 14.8965H11.2184L13.8198 14.8965C12.6897 13.7092 12.6897 11.4089 12.6897 10.4827V6.06896C12.6897 4.04082 11.0395 2.3908 9.01152 2.3908ZM9.01152 1.65516C9.21381 1.65516 9.37933 1.48965 9.37933 1.28735C9.37933 1.08505 9.21381 0.919531 9.01152 0.919531C8.80922 0.919531 8.6437 1.08505 8.6437 1.28735C8.6437 1.48965 8.80922 1.65516 9.01152 1.65516ZM9.01152 17.1034C8.12361 17.1034 7.37988 16.471 7.20922 15.6322H10.8138C10.6431 16.471 9.89942 17.1034 9.01152 17.1034Z" fill="#663399"/>
                </svg>
                </Badge>
              </Icon>
              <Icon>
              <AccountAvatar
                  className="align-middle"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                </Icon>
            </IconContainer>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="warning"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </HeaderContainer>
        </Toolbar>
      </StyledAppBar>
    </>
  );
}
