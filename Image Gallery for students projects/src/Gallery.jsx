import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [modal, setModal] = useState({ show: false, color: '', text: '' });

  const projects = [
    { color: '#4CAF50', text: 'Web App', title: 'E-Commerce Website', tech: 'React & Node.js' },
    { color: '#2196F3', text: 'Mobile App', title: 'Task Manager App', tech: 'Flutter & Firebase' },
    { color: '#FF9800', text: 'AI Project', title: 'Image Recognition', tech: 'Python & TensorFlow' },
    { color: '#9C27B0', text: 'Game Dev', title: '2D Platformer Game', tech: 'Unity & C#' },
    { color: '#F44336', text: 'IoT Device', title: 'Smart Home System', tech: 'Arduino & Raspberry Pi' },
    { color: '#607D8B', text: 'Data Viz', title: 'Sales Dashboard', tech: 'D3.js & MongoDB' }
  ];

  const openModal = (color, text) => setModal({ show: true, color, text });
  const closeModal = () => setModal({ show: false, color: '', text: '' });

  return (
    <div>
      <div className="gallery">
        {projects.map((project, index) => (
          <div key={index} className="project-item" onClick={() => openModal(project.color, project.text)}>
            <div className="img-placeholder" style={{ background: project.color }}>
              {project.text}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {modal.show && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <div className="modal-content">
            <div className="modal-placeholder" style={{ background: modal.color }}>
              {modal.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;