import React, { useState, useEffect } from 'react';
import { Wrapper, Box } from './App.styles';


const App: React.FC = () => {

  const [num1, setNum1] = useState('')
  const [state, setState] = useState<string[]>([])
  const [output, setOutput] = useState<string>()


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const array = value.split(',')

    setNum1(value);
    setState(array);
  }


  useEffect(() => {

    const output = state.map((i) => Number(i) * 2)
    const result = output.toString()
    setOutput(result);
    console.log("output", output)
  }, [num1])



  return (
    <Wrapper>
      <Box>
        <h3>Input</h3>
        <span>Array</span>
        <input className="input" type="text" name="number1" value={num1} onChange={handleInput} />
      </Box>
      <Box>
        <h3>Output</h3>
        <span>Double</span>
        <input className="input" type="text" placeholder='0' value={output} readOnly />
      </Box>
    </Wrapper>
  );
}

export default App;
