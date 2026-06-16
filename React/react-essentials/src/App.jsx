import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    // No need to add extra div, instead use <Fragment> element, shorter version is <>...</>
    // Fragment help you to avoid unnecessary HTML elements
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
