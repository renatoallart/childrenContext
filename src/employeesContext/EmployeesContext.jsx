import { createContext, useState } from 'react'
import EmployeesData from '../data/employeesList'


export const DataContext = createContext()

export function EmployeesContext({ children }) {
  const [employeesListData, setEmployeesListData] = useState(EmployeesData)

  function updateName(employeeId, value) {
    setEmployeesListData(oldStatsEmployees => oldStatsEmployees.map(employee =>
      employee.id == employeeId ? { ...employee, fullName: value } : employee))
  }

  function handleEmployees(action, payload) {
    switch (action) {
      case 'Update Name':
        updateName(payload.id, payload.value)
    }
  }

  return (
    <DataContext.Provider value={{ employeesListData, handleEmployees }}>
      {children}
    </DataContext.Provider>
  )
}
