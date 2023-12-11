import React from 'react';
import styles from './styles.module.scss';
import { IconButton } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import convertSecondToMM from '../../utils/convertSecondToMM';
import { RootContextAudio } from './../../Context/Context';
import cn from 'classnames';
const Track = (valueTrackFromProps) => {
  const { id, src, preview, title, artists, duration } = valueTrackFromProps;
  const convertSeconds = convertSecondToMM(duration);
  const { currentTrack, playing, clickAudio } = React.useContext(RootContextAudio);
  const currentTrackBool = currentTrack.id === valueTrackFromProps.id; // Если тот компонент который находится снизу является текущим, то мы добавим класс
  return (
    <div className={cn(styles.track, currentTrackBool && styles.playing)}>
      <IconButton onClick={() => clickAudio(valueTrackFromProps)}>
        {currentTrackBool && playing ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className={styles.preview} src={preview} alt="" />
      <div className={styles.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{convertSeconds}</p>
    </div>
  );
};
export default Track;
