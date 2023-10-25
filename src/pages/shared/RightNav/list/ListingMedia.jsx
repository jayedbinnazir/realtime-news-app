import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Paper } from '@mui/material';

export default function ListingMedia() {
  return (
    <Paper component={Box} elevation={1}  sx={{ width: '100%', maxWidth: 360  }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding:'1rem' }} >
              <ListItemIcon>
                <FacebookRoundedIcon fontSize='large'  sx={{ color:'#3B599C' }} />
              </ListItemIcon>
              <ListItemText primary="FaceBook" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding:'1rem' }} >
              <ListItemIcon>
                <TwitterIcon fontSize='large'  sx={{ color:'#3B599C' }} />
              </ListItemIcon>
              <ListItemText primary="Twitter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding:'1rem' }} >
              <ListItemIcon>
                <InstagramIcon fontSize='large' sx={{ color:'#3B599C' }} />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
     
      
    </Paper>
  );
}