import React from 'react'
import { Employees } from './components/EmployeesList'
import { EmployeesContext } from './employeesContext/EmployeesContext'

export function App() {
  return (
    <EmployeesContext>
      <Employees/>
    </EmployeesContext>
  )
}
