import React from 'react';
import tracksList from '../assets/tracksList';
import styles from './styles.module.scss';
import Track from '../components/Track/Track';
import { Input } from '@mui/material';

const runSearch = (queryStringArgument) => {
  if (!queryStringArgument) {
    return tracksList;
  }
  const lowerQueryStringArgument = queryStringArgument.toLowerCase();

  return tracksList.filter(
    (trackArgument) =>
      trackArgument.title.toLowerCase().includes(lowerQueryStringArgument) ||
      trackArgument.artists.toLowerCase().includes(lowerQueryStringArgument),
  );
};

const Main = () => {
  const [tracks, setTracks] = React.useState(tracksList);

  const changeInput = (event) => {
    const etv = event.target.value;
    const foundsTrack = runSearch(etv);
    setTracks(foundsTrack);
  };

  return (
    <div className={styles.search}>
      <Input className={styles.input} placeholder="Что хочешь послушать?" onChange={changeInput} />
      <div className={styles.list}>
        {tracks.map((value, index) => {
          return <Track key={index} {...value} />;
        })}
      </div>
    </div>
  );
};
export default Main;
