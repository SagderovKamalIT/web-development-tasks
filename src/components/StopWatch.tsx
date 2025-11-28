import { useState, useEffect } from "react";
import { Button, Typography, Stack, List, ListItem } from "@mui/material";
import styles from "./StopWatch.module.scss";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime(t => t + 1), 1000 / speed);
    return () => clearInterval(interval);
  }, [running, speed]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
    setSpeed(1);
  };
  const lap = () => setLaps([...laps, time]);
  const faster = () => setSpeed(prev => Math.min(prev * 2, 2));
  const slower = () => setSpeed(prev => Math.max(prev / 2, 0.5));

  return (
    <Stack className={styles.container} >
      <Typography className={styles.time} variant="h4">
        Секундомер: {time} сек
      </Typography>

      <Stack direction="row" className={styles.buttonRow}>
        <Button variant="contained" color="primary" onClick={start}>Старт</Button>
        <Button variant="contained" color="secondary" onClick={stop}>Стоп</Button>
        <Button variant="contained" onClick={reset}>Сброс</Button>
        <Button variant="contained" onClick={lap}>Круг</Button>
      </Stack>

      <Stack direction="row" className={styles.buttonRow} alignItems="center">
        <Button variant="outlined" onClick={faster}>Вдвое быстрее</Button>
        <Button variant="outlined" onClick={slower}>Вдвое медленнее</Button>
        <Typography className={styles.speedDisplay}>Скорость: {speed}x</Typography>
      </Stack>

      {laps.length > 0 && (
        <List className={styles.lapsList}>
          {laps.map((l, i) => (
            <ListItem key={i} className={styles.lapsListItem}>
              Круг {i + 1}: {l} сек
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}

export default Stopwatch;
