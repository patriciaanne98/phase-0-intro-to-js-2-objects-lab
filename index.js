const employee = {name: "Patricia",street: "Little Rock"};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
newObj [key]=value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newobj = {...employee};
    employee [key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj.key;
    return {
        [employee]: key
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    console.log (employee) 
    console.log (key)
    delete employee [key]
    console.log (employee)
     return employee;
}
