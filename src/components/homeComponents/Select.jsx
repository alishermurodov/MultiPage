import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function SelectCities({ name, valu }) {
    return (
        <div className="mx-auto md:mx-0 mb-[32px]">
            <Box sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        {name}
                    </InputLabel>
                    <NativeSelect
                        defaultValue={10}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>{valu}</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    );
}