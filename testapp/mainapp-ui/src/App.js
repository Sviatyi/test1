import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HeaderPage} from "./components/HeaderPage";
import {Users} from "./components/Users";
import {AddUser} from "./components/AddUser";
import {AddUserButton} from "./components/AddUserButton";
import {EditUser} from "./components/EditUser";
import {Groups} from "./components/Groups";
import {AddGroupButton} from "./components/AddGroupButton";
import {AddGroup} from "./components/AddGroup";
import {EditGroup} from "./components/EditGroup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/users">
            <HeaderPage/>
            <Users/>
            <AddUserButton/>
          </Route>
          <Route path="/users-add">
            <HeaderPage/>
            <Users/>
            <AddUser/>
          </Route>
          <Route path="/users-edit">
            <HeaderPage/>
            <Users/>
            <EditUser/>
          </Route>
          <Route path="/groups">
            <HeaderPage/>
            <Groups/>
            <AddGroupButton/>
          </Route>
          <Route path="/groups-add">
            <HeaderPage/>
            <Groups/>
            <AddGroup/>
          </Route>
          <Route path="/groups-edit">
            <HeaderPage/>
            <Groups/>
            <EditGroup/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
