import './App.css';
import { Row, Col, Div, Container, Text, Input, Icon } from "atomize";

const InputName = () => {
  return (
    <Input
      placeholder="Wat is je naam?"
      p={{ x: "2.5rem" }}
      prefix={
        <Icon
          name="UserSolid"
          color="success700"
          size="20px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />
      }
    />
  );
}

function App() {
  return (
    <Container>
      <Row>
        <Col size={{ xs: 12, lg: 1 }}>
          <Div p="1rem" bg="success700">
            1 of 12
          </Div>
        </Col>
        <Col size={{ xs: 12, lg: 10 }}>
          <Div p="1rem" bg="gray100">
            <Text textAlign="center" tag="h1" textSize="display1" m={{ b: "4rem" }}>
              Reconnecttttt
            </Text>
            {InputName()}
          </Div>
        </Col>
        <Col size={{ xs: 12, lg: 1 }}>
          <Div p="1rem" bg="success700">
            1 of 12
          </Div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
