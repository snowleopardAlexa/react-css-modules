import React from 'react';
import buttonStyles from './buttonStyles.module.css';
import Description from './components/Description/Description';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
      <button className={buttonStyles.blue}>
        This is the orange button</button>
      <button className={buttonStyles.orange}>
      This is the orange button</button>
      <Title />
      <Description />
    </div>
  );
}

export default App;

// It is recommended to keep the css module in the same folder 
// with the component they belong too. It is useful when we write 
// big applications. We can find an error faster. 
