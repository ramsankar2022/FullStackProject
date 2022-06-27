import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <Box
      sx={{
        width: 400,
        height: "auto",
        marginLeft: 50,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Item>
            <h3 style={{ textAlign: "center" }}>Create Post </h3>
          </Item>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Item>
            <List>
              {listOfPosts.map((value, key) => {
                return (
                  <ListItem key={value.id}>
                    <ListItemText
                      primary={value.title}
                      secondary={value.postText}
                    />
                    <i
                      className="material-icons"
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={(e) => console.log(value.id)}
                    >
                      delete
                    </i>
                  </ListItem>                  
                );
              })}
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
