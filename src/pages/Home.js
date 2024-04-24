import React, { useEffect, useState } from "react";
import { Modal, TextField, Button } from "@mui/material";
import "./Home.css";
import ProjectCard from "../components/ui/projectCard/ProjectCard";

function Home() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [projects, setProjects] = useState([]); // State to store projects

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleModelChange = (event) => setModel(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, model }),
      });

      if (response.ok) {
        console.log("Data submitted successfully");
        handleClose(); // Close the modal after submission
        fetchProjects(); // Fetch updated projects after submission
      } else {
        console.error("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch projects from the server
  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/getProjects");
      if (response.ok) {
        const data = await response.json();
        setProjects(data); // Update projects state with fetched data
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch projects when the component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="home">
      <h1>My Projects</h1>
      <div className="button__wrapper">
        <button onClick={handleOpen} className="add__project">
          Add Project
        </button>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <div className="modal__content">
            <h2>Add Project</h2>
            <TextField
              label="Title"
              value={title}
              onChange={handleTitleChange}
              fullWidth
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: "14px", // Adjust the font size as needed
                  fontFamily: "Inter, sans-serif", // Use Inter font with fallback to sans-serif
                  fontWeight: 500, // Adjust the font weight as needed
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px", // Adjust the font size as needed
                  fontFamily: "Inter, sans-serif", // Use Inter font with fallback to sans-serif
                },
              }}
            />
            <TextField
              label="Model"
              value={model}
              onChange={handleModelChange}
              fullWidth
              multiline
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: "14px", // Adjust the font size as needed
                  fontFamily: "Inter, sans-serif", // Use Inter font with fallback to sans-serif
                  fontWeight: 500, // Adjust the font weight as needed
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px", // Adjust the font size as needed
                  fontFamily: "Inter, sans-serif", // Use Inter font with fallback to sans-serif
                },
              }}
            />
            <div className="modal__actions">
              <Button
                variant="outlined"
                type="button" // Use type="button" to prevent form submission on Enter key
                onClick={handleClose}
                sx={{
                  borderColor: "#000",
                  fontSize: "0.8rem",
                  height: "32px",
                  color: "#000",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#1f1f1f",
                    color: "#fff",
                    borderColor: "#1f1f1f",
                    shadow: "none",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit" // Use type="submit" to trigger form submission
                className="modal__button-close"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "0.8rem",
                  height: "32px",
                  boxShadow: "none",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "#1b1b1b",
                    color: "#fff",
                    boxShadow: "none",
                  },
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </Modal>

      <div className="home__projects">
        {/* You have no projects yet. Add a project to get started. */}
        <div className="wrapper">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              id={project._id}
              title={project.title}
              model={project.model}
            />
          ))}
        </div>
      </div>
      <iframe
        id="chatbot-iframe"
        src="https://6628eaf1b5dff0007908d133--bright-kitsune-545e73.netlify.app/?objectId=66262a4b907607d80ea502ee"
        width="380px"
        height="480px"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Home;
