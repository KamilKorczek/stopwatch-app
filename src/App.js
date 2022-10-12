import Button from './components/Button/Button';
import { useEffect, useState } from 'react';
import Time from './components/Time/Time';
import Container from './components/Container/Container';
import Hero from './components/Hero/Hero'

const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;

    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [start]);
  

  return(
    <Container>
      <Hero />
      <Time time={time} />
        <Button action={() => setStart(true)}>Start</Button>
        <Button action={() => setStart(false)}>Stop</Button>
        <Button action={() => {setTime(0); setStart(false);}}>Reset</Button>
    </Container>
  )
};

export default App;