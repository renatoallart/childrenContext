export function nameUpdate(setEmployeesListData, employeeId, value) {
    setEmployeesListData(oldStatsEmployees => oldStatsEmployees.map(employee =>
        employee.id == employeeId ? { ...employee, fullName: value } : employee))
}