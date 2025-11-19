"use client";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  ButtonGroup,
  Button,
  Drawer,
  ListItem,
  List,
  useMediaQuery,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toggleAdmin } from "../redux/features/user/userSlice";
import { useTheme } from "@mui/material/styles";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const [drawerState, setDrawerState] = useState<boolean>(false);

  const toggleDrawer = () => setDrawerState(!drawerState);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const menuIcon = !drawerState ? <MenuIcon /> : <CloseIcon />;

  return (
    <AppBar position="sticky" sx={{ height: "64px" }}>
      <Toolbar>
        <IconButton color="inherit">
          <WorkIcon />
        </IconButton>
        <Typography flexGrow={1} variant="h6">
          Job Portal
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ButtonGroup variant="text">
            <Button color="inherit">Home</Button>
            <Button color="inherit" onClick={() => dispatch(toggleAdmin())}>
              Admin Panel
            </Button>
            <Button color="inherit">About</Button>
            <IconButton>
              <AccountCircleIcon color="inherit" />
            </IconButton>
            <Typography alignSelf="center" variant="subtitle2">
              {user.userName}
              {user.isAdmin ? "(admin)" : ""}
            </Typography>
          </ButtonGroup>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={() => setDrawerState(true)}>
            {menuIcon}
          </IconButton>
          <Drawer
            slotProps={{ paper: { sx: { width: "100%", top: "64px" } } }}
            anchor="right"
            open={drawerState && !isDesktop}
            onClose={toggleDrawer}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <ListItemButton>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>About</ListItemText>
                </ListItemButton>
                <ListItemButton>
                  <ListItemText>Admin Panel</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
