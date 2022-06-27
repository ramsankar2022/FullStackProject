import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);

  const onsubmit = () => {
    const data = {
      title: title,
      postText: postText,
      username: userName,
    };

    axios.post("http://localhost:5000/posts", data).then((response) => {
      console.log("IT WORKED");
      setSuccess(true);
    });
  };
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
          <Item></Item>
          <form autoComplete="off">
            <TextField
              style={{ width: 400 }}
              type="text"
              name="title"
              id="title"
              label="Post title here..."
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <br />
            <TextField
              style={{ width: 400 }}
              type="text"
              name="postText"
              id="postText"
              label="Post text here... "
              variant="outlined"
              onChange={(e) => setPostText(e.target.value)}
              required
            />
            <br />
            <br />
            <TextField
              style={{ width: 400 }}
              type="text"
              name="username"
              id="username"
              label="User name here ... "
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <br />
            <br />
            <Button
              style={{ marginTop: 5, width: 400 }}
              variant="outlined"
              name="create"
              id="create"
              onClick={(e) => {
                e.preventDefault();
                onsubmit();
              }}
            >
              Create User
            </Button>

            {success && <span style={{color:"green", fontWeight:"bold"}}> Post Created Successfully !!!</span> }
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreatePost;
