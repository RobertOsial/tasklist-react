import { HashRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage.js";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TasksPage/TaskPage/index.js";


const App = () =>

  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">o autorze</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>

export default App;