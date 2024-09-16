
import styled from 'styled-components';
import Antonio from '../../assets/Antonio.jpeg'
import Cadu from '../../assets/Cadu.jpeg'
import Felipe from '../../assets/Felipe.jpeg'

interface Developer {
  name: string;
  rm: string;
  email: string;
  github: string;
  instagram: string;
  image: string;
}

const developers: Developer[] = [
  {
    name: 'Antonio Junior',
    rm: '554518',
    email: 'AntonioJunior@Gmail.com',
    github: 'https://github.com/Antonio-Junior1',
    instagram: 'https://www.instagram.com/jrz__7/',
    image: Antonio,
  },
  {
    name: 'Carlos Eduardo',
    rm: '555223',
    email: 'CarlosEduardo@Gmail.com',
    github: 'https://github.com/CarlosCampos84',
    instagram: 'https://www.instagram.com/c4duzin_n/',
    image: Cadu,
  },
  {
    name: 'Felipe Pizzinato',
    rm: '555141',
    email: 'FelipePizzinato@Gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/_pizzinato/',
    image: Felipe,
  },
];

const DevelopersSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const DevelopersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DeveloperContainer = styled.div`
  flex-basis: 30%;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DeveloperImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const DeveloperName = styled.h3`
  margin-top: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const SocialLink = styled.a`
  margin-right: 10px;
`;

const DevelopersSection = () => {
  return (
    <DevelopersSectionContainer>
      <h2>Desenvolvedores</h2>
      <DevelopersContainer>
        {developers.map((developer) => (
          <DeveloperContainer key={developer.name}>
            <DeveloperImage src={developer.image} alt={`Foto Desenvolvedor ${developer.name}`} />
            <DeveloperName>{developer.name}</DeveloperName>
            <p>RM: {developer.rm}</p>
            <p>Email: {developer.email}</p>
            <SocialLinks>
              <SocialLink href={developer.github}>github</SocialLink>
              <SocialLink href={developer.instagram}>instagram</SocialLink>
            </SocialLinks>
          </DeveloperContainer>
        ))}
      </DevelopersContainer>
    </DevelopersSectionContainer>
  );
};

export default DevelopersSection;