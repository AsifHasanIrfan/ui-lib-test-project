import * as React from 'react';
//Material-ui imports
import { styled, alpha } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//Internal imports
import Link from '../Link';

const drawerWidth = 220;

const openedMixin = (theme: any) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(12)} + 1px)`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledDrawer = styled(Drawer)`
  & > div {
    background-color: #663399;
  }
`;

const SidebarList = styled('div')({
  display: 'flex',
  justifyContent: 'end',
});

const SidebarListItem = styled(ListItemIcon)(({ theme }) => ({
  margin: '5px 14px',
  padding: '12px 20px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
 },
  borderRadius: '5px'
}));

export default function Sidebar(props: any) {
  const {open, handleDrawerClose} = props;
  return (
    <>
      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
            <h1 style={{margin: 0, color: 'white'}}>Gull</h1>
          <IconButton sx={{color: 'white'}} onClick={handleDrawerClose}>
            { open && <ChevronLeftIcon /> }
          </IconButton>
        </DrawerHeader>
        <SidebarList>
        <List>
        <Link href="/">
          <ListItem sx={{padding: 0}}>
            <SidebarListItem>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H3V28H30V29H3V30H2V29H0V28H2V0ZM14.5 26H12.5C12.224 26 12 25.775 12 25.5V14.5C12 14.224 12.224 14 12.5 14H14.5C14.776 14 15 14.224 15 14.5V25.5C15 25.775 14.776 26 14.5 26ZM13 25H14V15H13V25ZM6.5 26H8.5C8.776 26 9 25.775 9 25.5V19.5C9 19.225 8.776 19 8.5 19H6.5C6.224 19 6 19.225 6 19.5V25.5C6 25.775 6.224 26 6.5 26ZM8 25H7V20H8V25ZM20.5 26H18.5C18.225 26 18 25.775 18 25.5V19.5C18 19.225 18.225 19 18.5 19H20.5C20.775 19 21 19.225 21 19.5V25.5C21 25.775 20.775 26 20.5 26ZM19 25H20V20H19V25ZM24.5 26H26.5C26.775 26 27 25.775 27 25.5V13.5C27 13.224 26.775 13 26.5 13H24.5C24.225 13 24 13.224 24 13.5V25.5C24 25.775 24.225 26 24.5 26ZM26 25H25V14H26V25ZM4.832 17.644C4.931 17.762 5.071 17.823 5.214 17.823C5.328 17.823 5.442 17.785 5.539 17.703L13.936 10.605L18.56 15.24C18.654 15.333 18.781 15.386 18.914 15.386C19.046 15.386 19.173 15.334 19.268 15.239L26.872 7.569C27.067 7.373 27.064 7.056 26.869 6.862C26.674 6.668 26.355 6.669 26.162 6.865L18.911 14.178L14.317 9.574C14.133 9.389 13.839 9.378 13.64 9.545L4.891 16.941C4.68 17.119 4.654 17.435 4.832 17.644Z" fill="white"/>
            </svg>
            </SidebarListItem>
            <ListItemText sx={{color: 'white',}} primary="Dashboard" />
          </ListItem>
        </Link>
        <Link href="/table">
          <ListItem sx={{padding: 0}}>
            <SidebarListItem>
            <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33333 23H25.6667C26.9528 23 28 21.7097 28 20.125V2.875C28 1.2903 26.9528 0 25.6667 0H2.33333C1.0472 0 0 1.2903 0 2.875V20.125C0 21.7097 1.0472 23 2.33333 23ZM0.933333 2.875C0.933333 1.92395 1.56147 1.15 2.33333 1.15H25.6667C26.4385 1.15 27.0667 1.92395 27.0667 2.875V20.125C27.0667 21.076 26.4385 21.85 25.6667 21.85H2.33333C1.56147 21.85 0.933333 21.076 0.933333 20.125V2.875Z" fill="white"/>
            </svg>
            </SidebarListItem>
            <ListItemText sx={{color: 'white',}} primary="Table" />
          </ListItem>
        </Link>
        </List>
      </SidebarList>
      </StyledDrawer>
    </>
  );
}
