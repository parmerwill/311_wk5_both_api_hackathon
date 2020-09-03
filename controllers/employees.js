

const getEmployees = (req,res)=>{
 
    res.send("getting employees")
};

const getEmployeesById = (req,res) => {

    res.send("getting employees by id")

};

const getEmployeesByFirstName = (req,res) =>{
    
res.send("getting employees by first_name")
};

module.exports = { getEmployees, 
                getEmployeesById, 
                getEmployeesByFirstName }