import styled from "styled-components";

const ProjectCard = styled.div`
  border-radius: 4px;
  height: auto;
  width: 100%;
  margin: 20px auto;
  max-width: 730px;
  min-height: 240px;

  & img {
        height: auto;
        max-width: 100%;
        object-fit: scale-down;
        aspect-ratio: attr(width) / attr(height);
    }

  & video {
      max-width: 100%;
      object-fit: scale-down;
  }
`;

export default ProjectCard;
