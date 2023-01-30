import React from 'react'
import { Routes, Route } from 'react-router-dom'
import classes from './App.module.scss'
import Main from '../pages/MainPage'
import News from '../pages/News/News'
import Contacts from '../ui/Contacts'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import NotFoundPage from '../pages/NotFoundPage'

const App = () => (
  <div className={classes.wrapper}>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route
        path="/contacts"
        element={<Contacts />}
      />
      <Route
        path="/news"
        element={<News />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
    <Footer />
  </div>
)

export default App
