import Home from './components/pages/Home'

import About from './components/pages/About'
import AllProjects from './components/pages/AllProjects'
import ProjectPage from './components/pages/ProjectPage'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/about' component={About} />
        <Route path='/all-projects' component={AllProjects} />
        {/* <Route path='/project-page' component={ProjectPage} /> */}
        <Route path='/project-page/:id' component={ProjectPage} />
      </Switch>
    </Router>
  )
}

export default App
