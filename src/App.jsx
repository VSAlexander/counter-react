import { Counter } from './components/Counter/Counter';
import { Header } from './components/Header/Header';
import { Stopwatch } from './components/Stopwatch/Stopwatch';
import { AuthContextProvider } from './context/AuthContext';
import { Vouter } from './components/Vouter/Vouter';
import { CandidateList } from './components/CandidateList/CandidateList';
import { CommentList } from './components/CommentList/CommentList';

export function App() {
  return (
    <>
      <AuthContextProvider>
        <Header title={'Practice with some hooks'} />
      </AuthContextProvider>
      {/* <Counter />
      <Vouter />
      <Stopwatch />
      <CandidateList /> */}
      <CommentList />
    </>
  );
}

export default App;
