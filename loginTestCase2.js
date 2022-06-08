/// <reference types="cypress" />
import LoginPage from '../support/login-Obj-Page/LoginPage'
//import login from '..//login-Obj-Page/LoginPage'

describe('Login test', () => {

    it('Verify login test', () => {

const obj=new LoginPage
  obj.Visit() 
  obj.Email('aqsa16@mailinator.com')
  obj.Password('aqsa51')
  obj.Submit()
    })
})