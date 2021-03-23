import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import Header from './layout/Header'
import NotFound from './layout/NotFound'
import Contacts from './contacts/Contacts'
import AddContact from './contacts/AddContact'

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Row className='mt-4'>
          <Col>
            <Switch>
              <Route exact path='/' component={Contacts}/>
              <Route exact path='/add_contact' component={AddContact}/>
              <Route path='*' component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
