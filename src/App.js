import './components/assetes/styles/style.css';
import { Header } from './components/Header';
import { MainSection } from './components/MainSection';

function App() {
  return (
    <div className="d-block d-sm-none">
      <Header />
      <MainSection />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
