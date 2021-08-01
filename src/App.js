import logo from './logo.svg';
import './App.css';
import TopHeader from './uiComponents/TopHeader';
import Login from './uiComponents/Login';
import ChatApp from './components/ChatApp';

function App() {
  console.info(TopHeader.getValue);
  return (
    <div className="App">
      <TopHeader/>
      <Login/>
    <div>
      <ChatApp />
    </div>
  );
}

export default App;