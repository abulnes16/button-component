/* App component */

// Styles
import "./App.scss";

// Styled componentes
import Container from "./styled-components/Container";
import Subtitle from "./styled-components/Subtitle";
import Logo from "./styled-components/Logo";
import Title from "./styled-components/Title";
import GridContainer from "./styled-components/GridContainer";
import GridCell from "./styled-components/GridCell";
import Button from "./components/button/Button";
import ButtonTitle from "./styled-components/ButtonTitle";
import ButtonHeader from "./styled-components/ButtonHeader";

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
              <ButtonTitle>{"<Button variant='outline' />"}</ButtonTitle>
              <Button variant="outline">Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button variant='text' />"}</ButtonTitle>
              <Button variant="text">Default</Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-variants">
          <ButtonHeader>Button variants</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(3, 1fr)">
            <Container direction="column">
              <ButtonTitle>{"<Button disableShadow/>"}</ButtonTitle>
              <Button color="primary" disableShadow="disableShadow">
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button disabled/>"}</ButtonTitle>
              <Button disabled>Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button disabled variant='text'/>"}</ButtonTitle>
              <Button disabled variant="text">
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
              <Button color="primary" startIcon={<More />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button startIcon={<Alarm/>} />"}</ButtonTitle>
              <Button color="primary" startIcon={<Alarm />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Home/>} />"}</ButtonTitle>
              <Button color="primary" endIcon={<Home />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Android/>} />"}</ButtonTitle>
              <Button color="primary" endIcon={<Android />}>
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button endIcon={<Face/>} />"}</ButtonTitle>
              <Button color="primary" endIcon={<Face />}>
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
              <Button color="primary" size="sm">
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button size='md' />"}</ButtonTitle>
              <Button color="primary" size="md">
                Default
              </Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button size='lg' />"}</ButtonTitle>
              <Button color="primary" size="lg">
                Default
              </Button>
            </Container>
          </GridContainer>
        </GridCell>
        <GridCell className="button-colors" columns="1 / 3">
          <ButtonHeader>Button colors</ButtonHeader>
          <GridContainer rows="1fr" columns="repeat(4, 1fr)" gap="40px">
            <Container direction="column">
              <ButtonTitle>{"<Button color='default' />"}</ButtonTitle>
              <Button color="default">Default</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button color='primary' />"}</ButtonTitle>
              <Button color="primary">Primary</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button color='secondary' />"}</ButtonTitle>
              <Button color="secondary">Secondary</Button>
            </Container>
            <Container direction="column">
              <ButtonTitle>{"<Button color='danger' />"}</ButtonTitle>
              <Button color="danger">Danger</Button>
            </Container>
          </GridContainer>
        </GridCell>
      </GridContainer>
    </Container>
  );
}

export default App;
