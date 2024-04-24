import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Modal, Button, TextField } from "@mui/material";
import "./ProjectCard.css";

const ProjectCard = ({ id, title, model }) => {
  const [open, setOpen] = useState(false);
  const [iframeCode, setIframeCode] = useState("");

  const handleOpen = () => {
    setOpen(true);
    setIframeCode(
      `<iframe id="chatbot-iframe" src="https://6628eaf1b5dff0007908d133--bright-kitsune-545e73.netlify.app/?objectId=${id}" width="380px" height="480px" frameborder="0"></iframe>`
    );
  };

  const handleClose = () => setOpen(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iframeCode).then(
      () => console.log("Iframe code copied to clipboard"),
      (error) => console.error("Failed to copy iframe code:", error)
    );
  };

  return (
    <div className="project-card">
      <div className="project-card__header">
        <h3 className="card-title">{title}</h3>
        <p>Active</p>
      </div>
      <button className="card__button" onClick={handleOpen}>
        View <OpenInNewIcon sx={{ fontSize: "1rem" }} />
      </button>
      <Modal open={open} onClose={handleClose}>
        <div className="modal__content" sx={{ padding: "20px" }}>
          <h2>{title}</h2>
          <p>{model}</p>
          <div>
            <TextField
              id="iframe-code"
              label="Iframe Code"
              value={iframeCode}
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              readOnly
              sx={{ marginBottom: "20px" }}
            />
          </div>
          <Button
            onClick={copyToClipboard}
            variant="outlined"
            sx={{
              marginRight: "10px",
              color: "#fff",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#1b1b1b",
              },
            }}
          >
            Copy Iframe Code
          </Button>
          <Button onClick={handleClose} variant="outlined">
            Close Modal
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
