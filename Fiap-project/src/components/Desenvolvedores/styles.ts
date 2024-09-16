import styled from "styled-components/dist/constructors/styled";

export const DevelopersSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const DevelopersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const DeveloperContainer = styled.div`
  flex-basis: 30%;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DeveloperImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const DeveloperName = styled.h3`
  margin-top: 10px;
`;

export const SocialLinks = styled.div`
  margin-top: 10px;
`;

export const SocialLink = styled.a`
  margin-right: 10px;
`;
