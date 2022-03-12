import React from 'react'
import Routes from '../../Routes'
import Header from './Header'
import Footer from './Footer'
import ValidateRouter from './ValidateRouter'

export default function DefaultRouter() {
  return (
    <div className="shopmobile-main">
    <ValidateRouter/>
    <Header />
    <Routes />
    <Footer />
  </div>
  )
}
