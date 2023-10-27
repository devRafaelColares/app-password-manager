import './App.css';
import Title from './components/title';
import Form from './components/Form';

function App() {
  const title = 'Gerenciador de senhas';
  return (
    <div>
      <Title
        title={ title }
      />
      <Form />
    </div>
  );
}

export default App;
