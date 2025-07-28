import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const BoxOne = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
`;

const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
`;

const Circle = styled(Box)`
    border-radius: 50px;
`;

function App() {
  return (
    <Father>
        <Box bgColor="tomato"/>
        <Circle bgColor="teal"/>
    </Father>
  );
}

export default App;
