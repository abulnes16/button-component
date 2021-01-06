/* App component */

// Styles
import "./App.css";

// Styled componentes
import Container from "./styled-components/Container";
import Subtitle from "./styled-components/Subtitle";
import Logo from "./styled-components/Logo";
import Title from "./styled-components/Title";
import GridContainer from "./styled-components/GridContainer";
import GridCell from "./styled-components/GridCell";
import Button from "./styled-components/Button";
import ButtonTitle from "./styled-components/ButtonTitle";
import ButtonHeader from "./styled-components/ButtonHeader";
import Footer from './styled-components/Footer';

//Icons
import { More, Home, Alarm, Android, Face } from "@material-ui/icons";

function App() {
  return (
    <Container padding="1em 2em" direction="column">
      <Container>
        <Logo src="assets/img/devchallenges.png" alt="Dev challenge logo" />
        <Title>Dev Challenge Design System</Title>
      </Container>
      <Subtitle>Buttons</Subtitle>
      <GridContainer>
        <GridCell className="button-types">
          <ButtonHeader>Button types</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(3,1fr)">
            <Container direction="column">
              <ButtonTitle>{"<Button />"}</ButtonTitle>
              <Button>Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button outline />"}</ButtonTitle>
              <Button outline>Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button text />"}</ButtonTitle>
              <Button text>Default</Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-variants">
          <ButtonHeader>Button variants</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(3, 1fr)">
            <Container direction="column">
              <ButtonTitle>{"<Button disableShadow/>"}</ButtonTitle>
              <Button
                hoverColor="#0039CB"
                bgColor="#3D5AFE"
                color="white"
                disableShadow
              >
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button disabled/>"}</ButtonTitle>
              <Button disabled>Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button disabled text/>"}</ButtonTitle>
              <Button disabled text>
                Default
              </Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-icons" columns="1 / 3">
          <ButtonHeader>Button Icons</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(5, 1fr)" gap="40px">
            <Container direction="column">
              <ButtonTitle>{"<Button startIcon={<More/>} />"}</ButtonTitle>
              <Button type="primary" startIcon={<More />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button startIcon={<Alarm/>} />"}</ButtonTitle>
              <Button type="primary" startIcon={<Alarm />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Home/>} />"}</ButtonTitle>
              <Button type="primary" endIcon={<Home />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Android/>} />"}</ButtonTitle>
              <Button type="primary" endIcon={<Android />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Face/>} />"}</ButtonTitle>
              <Button type="primary" endIcon={<Face />}>
                Default
              </Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-sizes" columns="1 / 3">
          <ButtonHeader>Button Sizes</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(3, 1fr)" gap="40px">
            <Container direction="column">
              <ButtonTitle>{"<Button size='sm' />"}</ButtonTitle>
              <Button type="primary" size="sm">
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button size='md' />"}</ButtonTitle>
              <Button type="primary" size="md">
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button size='lg' />"}</ButtonTitle>
              <Button type="primary" size="lg">
                Default
              </Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-colors" columns="1 / 3">
          <ButtonHeader>Button colors</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(4, 1fr)" gap="40px">
            <Container direction="column">
              <ButtonTitle>{"<Button type='default' />"}</ButtonTitle>
              <Button type="default">Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button type='primary' />"}</ButtonTitle>
              <Button type="primary">Primary</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button type='secondary' />"}</ButtonTitle>
              <Button type="secondary">Secondary</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button type='danger' />"}</ButtonTitle>
              <Button type="danger">Danger</Button>
            </Container>
          </GridContainer>
        </GridCell>
      </GridContainer>
      <Footer>Angel Bulnes (@abulnes16) @ DevChallenges.io</Footer>
    </Container>
  );
}

export default App;
