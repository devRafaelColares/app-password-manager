import './App.css';
import Title from './components/title';

function App() {
  const title = 'Gerenciador de senhas';
  return (
    <div>
      <Title
        title={ title }
      />
    </div>
  );
}

export default App;
