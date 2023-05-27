import Headers  from './components/hat/Headers'
import Footer from './components/vault/Footer';
import Main from './components/main/Main';
import './css/main.scss';


function App() {
  return (
    <>
      <Headers></Headers>
      <main>
        <Main></Main>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
