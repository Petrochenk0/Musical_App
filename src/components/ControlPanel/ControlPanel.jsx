import React from 'react';
import { RootContextAudio } from '../../Context/Context';
import styles from './styles.module.scss';
import { Slider, IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import convertSecondToMM from '../../utils/convertSecondToMM';

const TimeControl = () => {
  console.log('Time control rerender');
  const [currentTime, setCurrentTime] = React.useState(0);
  const { currentTrack, audioTracks } = React.useContext(RootContextAudio);
  const { duration } = currentTrack;

  const finnalyFilteredCurrentTimeForSlider = Math.round((currentTime / duration) * 100);

  const finnalyFilteredCurrentTimeWithSecondForSlider = convertSecondToMM(currentTime);

  React.useEffect(() => {
    const addIntervalOfOneSecond = setInterval(() => {
      setCurrentTime(audioTracks.currentTime);
    }, 1000);
    return () => {
      clearInterval(addIntervalOfOneSecond); // Это нужно при размонтировании компонента
    };
  }, []);

  const changeAudioSlider = (_, value) => {
    const timeAudioInSeconds = Math.round((value / 100) * duration);
    setCurrentTime(timeAudioInSeconds);
    audioTracks.currentTime = timeAudioInSeconds;
  };

  return (
    <>
      <p>{finnalyFilteredCurrentTimeWithSecondForSlider}</p>
      <Slider
        step={1}
        min={0}
        max={100}
        value={finnalyFilteredCurrentTimeForSlider}
        onChange={changeAudioSlider}
      />
    </>
  );
};
const ControlPanel = () => {
  console.log('Control panel rerender');
  const { currentTrack, playing, clickAudio } = React.useContext(RootContextAudio);
  const { title, artists, duration, preview } = currentTrack;

  const convertSecond = convertSecondToMM(duration);

  return (
    <div className={styles.playbar}>
      <img className={styles.preview} src={preview} alt="preview" />
      <IconButton onClick={() => clickAudio(currentTrack)}>
        {playing ? <Pause /> : <PlayArrow />}
      </IconButton>
      <div className={styles.credits}>
        <h3>{title}</h3>
        <p>{artists}</p>
      </div>
      <div className={styles.slider}>
        <TimeControl />
        <p>{convertSecond}</p>
      </div>
    </div>
  );
};
export default ControlPanel;
// Подготовил компонент для завершения проекта и дальнейшего деплоя
// Что здесь значит step в Slider
