import Main from './pages/Main';
import styles from './global.module.scss';
import ContextProviderForAudio from './Context/Context';
import ControlPanel from './components/ControlPanel/ControlPanel';
const App = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <ControlPanel />
    </div>
  );
};
export default App;
