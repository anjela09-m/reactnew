import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';

function Blogform() {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted :', formData);
    alert('Form Submitted Successfully!');
   
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add New Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Blog Name"
          name="blogName"
          value={formData.blogName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <TextField
          fullWidth
          label="Author Name"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button onClick={handleSubmit}type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Blogform;
