import logo from './logo.svg';
import TabBarExample from './router/router'
import Switchrout from './router/Switch'
import 'antd-mobile/dist/antd-mobile.css'
import './App.css'
function App() {
  return (
    <div className="App">
      <Switchrout />
      <TabBarExample/>
    </div>
  );
}

export default App;
