import './App.css';
 //import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.css';
//import UserReporting from './components/UserReporting';
//import DBRecord from './components/DBRecord';
//import WorkOrderReports from './components/WorkOrderReports';
//import UserReporting from './components/UserReporting';
import WOExecution from './components/WOE/WOExecution';



function App() {
  return (
    <div className="App">
      {/* <UserReporting/> */}
      <WOExecution/>
    </div>
  );
}

export default App;
