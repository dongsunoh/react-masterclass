import styled, {keyframes} from "styled-components";

const Wrapper = styled.div`
    display: flex;
`;

const animation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0;
    }
    50% {
        border-radius: 100px;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 0;
    }
`;

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animation} 1s linear infinite;
    
    span {
        font-size: 36px;
        &:hover {
            font-size: 50px;
        }
        &:active {
            opacity: 0;
        }
    }
    span:hover {
        font-size: 60px;
    }
    
`;

function App() {
  return (
    <Wrapper>
      <Box>
          <span>😂</span>
      </Box>
    </Wrapper>
  );
}

export default App;
