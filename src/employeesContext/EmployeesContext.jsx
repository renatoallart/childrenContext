import { createContext, useState } from 'react'
import EmployeesData from '../data/employeesList'


import { nameUpdate } from '../actions/nameUpdate'

export const DataContext = createContext()

export function EmployeesContext({ children }) {
  const [employeesListData, setEmployeesListData] = useState(EmployeesData)

  function handleEmployees(action, payload) {
    switch (action) {
      case 'Name Update':
        nameUpdate(setEmployeesListData, payload.id, payload.value)
    }
  }

  return (
    <DataContext.Provider value={{ employeesListData, handleEmployees }}>
      {children}
    </DataContext.Provider>
  )
}
