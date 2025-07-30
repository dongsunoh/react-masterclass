import React, {useState} from 'react';

function App() {

    const [username, setUsername] = useState("");
    const onChange = (event : React.FormEvent<HTMLInputElement>) => {
        const {currentTarget : {value}} = event;
        setUsername(value);
    };

    const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 기본 제출 동작 막기
        console.log("hello " + username);
    };

    return (
        <div>
          <form onSubmit={onSubmit}>
              <input
                  value={username}
                  onChange={onChange}
                  type="text"
                  placeholder="username"
              />
              <button>Log in</button>
          </form>
        </div>
    );
}

export default App;
