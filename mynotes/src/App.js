import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddNote from './components/AddNote';
import MyNotes from './components/MyNotes';
import NoteState from './context/Notes/NoteState';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/addnote">
                <AddNote />
              </Route>
              <Route exact path="/mynotes">
                <MyNotes />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;