export function getAllEmployees() {
    return { type: "GET_EMPLOYEES" }
}

export  function addEmployee() {
    return { type: "ADD_EMPLOYEE" }
}

export  function editEmployee() {
    return { type: "UPDATE_EMPLOYEES" }
}

export  function deleteEmployee() {
    return { type: "DELETE_EMPLOYEES" }
}

