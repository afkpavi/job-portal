"use client";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  ButtonGroup,
  Button,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { toggleAdmin } from "../redux/features/user/userSlice";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  return (
    <AppBar>
      <Toolbar>
        <IconButton color="inherit">
          <WorkIcon />
        </IconButton>
        <Typography flexGrow={1} variant="h6">
          Job Portal
        </Typography>
        <Box sx={{ mr: 6 }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
