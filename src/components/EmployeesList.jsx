import { useContext } from "react"
import { DataContext } from "../employeesContext/EmployeesContext"
import { Employee } from "./Employee"

export function Employees() {
    const { employeesListData, handleEmployees } = useContext(DataContext)
    return (
        <div className="flex flex-wrap m-6 gap-2">
            {employeesListData.map(
                employee => <Employee key={employee.id} handleEmployees={handleEmployees} {...employee} />)}
        </div>

    )
}
