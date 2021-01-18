import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import TodoDetail from './components/todos/TodoDetail'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateTodo from './components/todos/CreateTodo'


class App extends Component {
  render(){
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/todo/:id' component={TodoDetail} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreateTodo} />

            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
