import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './Context.module.scss';

const options = [
    {
        id: '1',
        text: 'Edit',
        value: 'Edit',
    },
    {
        id: '2',
        text: 'Delete',
        value: 'Delete',
    },
];

const ITEM_HEIGHT = 48;
// @ts-ignore
export default function ContextMenu({ setIsOpen }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menu, setMenu] = React.useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOption = () => {};

    return (
        <div className={styles.context__wrapp}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} selected={option.text === 'Pyxis'} onClick={handleClose}>
                        <div onClick={() => setIsOpen(true)}>{option.text}</div>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
