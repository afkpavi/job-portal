"use client"
import { FormControl, InputAdornment, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from 'react';

type Props = {}

const Jobs = (props: Props) => {

    const [showClearIcon, setShowClearIcon] = useState("none");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleClick = (): void => {
        // TODO: Clear the search input
        console.log("clicked the clear icon...");
    };

  return (
    <Container>
        <Box>
            <FormControl >
                <TextField
                size="small"
                variant="outlined"
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                    endAdornment: (
                    <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                        onClick={handleClick}
                    >
                        <ClearIcon />
                    </InputAdornment>
                    )
                }}
                />
        </FormControl>
        </Box>
    </Container>
  )
}

export default Jobs