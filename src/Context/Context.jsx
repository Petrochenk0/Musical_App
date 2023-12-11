// Создаём контекст для информации о треке то есть какой трэк играет
// И для того чтобы управлять ползунком трэка
import React from 'react';
import { createContext } from 'react';
import tracksList from '../assets/tracksList';

const audioTracks = new Audio();
console.log(audioTracks);
export const RootContextAudio = createContext({});

const ContextProviderForAudio = ({ children }) => {
  const [currentTrack, setCurrentTrack] = React.useState(tracksList[0]);
  const [playing, setPlaying] = React.useState(false);

  const clickAudio = (clickAudioTrackArgument) => {
    console.log(clickAudioTrackArgument.id);
    if (currentTrack.id !== clickAudioTrackArgument.id) {
      // currentTrack ?= clickAudioTrackArgument?
      // когда мы нажимаем на другое воспроизведение у нас будет воспроизводиься другая песня
      setCurrentTrack(clickAudioTrackArgument);
      setPlaying(true);

      audioTracks.src = clickAudioTrackArgument.src; // Это путь который меняется в зависимости от выбранной песни

      audioTracks.currentTime = 0;
      audioTracks.play(); // Воспроизводим наше аудио

      return; // Чтобы логика одного if не перекликалась с другим if мы вызываем return
    }
    if (playing) {
      // как эти два условия связаны
      audioTracks.pause();
      setPlaying(false);
    } else {
      audioTracks.play();
      setPlaying(true);
    }
  };
  const valueWithData = { audioTracks, currentTrack, playing, clickAudio };
  return <RootContextAudio.Provider value={valueWithData}>{children}</RootContextAudio.Provider>;
};
export default ContextProviderForAudio;
