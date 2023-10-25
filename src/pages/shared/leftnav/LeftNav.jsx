import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const LeftNav = () => {
  console.log('rendeed')
  const [catagories, setCategories] = useState([]);
  let [selectedId, setSelectedId] = useState(0);
  console.log(selectedId)
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedId(categoryId);
  };
  return (
    <Box p={2} sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "#fff" }} >
      <Typography variant="h5" fontWeight={"bold"} sx={{ float: "left" }} pb={3} >
        All Category
      </Typography>
      <Box>
        <nav aria-label="main mailbox folders">
          <Box sx={{ width: "100%" }}>
            <List  >
              {catagories?.map((category) => {
                return (
                  <ListItem  onClick={() => handleCategoryClick(category.id)} divider sx={{  backgroundColor: parseInt(category.id) === selectedId ? '#bdbdbd' : 'inherit'  }} key={category.id} disableGutters disablePadding  >
                    <ListItemButton    LinkComponent={NavLink} to={ `/category/${category.id}`} sx={{ textAlign:'justify' ,   padding:'14px', color:parseInt(category.id)===selectedId ? '#212121':'#616161' }} selected={parseInt(category.id) === selectedId } >
                      <ListItemText sx={{ marginLeft:'12px'  }} primary={<Typography fontWeight={'bold'} variant="subtitle1" >{category.name}</Typography>} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </nav>
      </Box>
    </Box>
  );
};
