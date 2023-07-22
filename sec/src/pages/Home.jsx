import React, { useState } from "react";

const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        lastName: "",
        age: "",
        phone: "",
        city: "",
        education: "",

    });
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("inputs", inputs);
        if (editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex], inputs);
            setTableData([...tempTableData]);
            setEditClick(false);
            setInputs({
                name: "",
                lastName: "",
                age: "",
                phone: "",
                city: "",
                education: "",

            });
        } else {
            setTableData([...tableData, inputs]);
            setInputs({
                name: "",
                lastName: "",
                age: "",
                phone: "",
                city: "",
                education: "",

            });
        }
    };

    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
    };
    const handleEdit = (index) => {
        const tempData = tableData[index];

        setInputs({ name: tempData.name, lastName: tempData.lastName, age: tempData.age, phone:tempData.phone,city:tempData.city,education:tempData.education});
        setEditClick(true);
        setEditIndex(index);
    };
    return (
        <>
            <h1 className="heading">Student Information Form</h1>
            <div className="outermaincontainer" >
                <div className="outercontainer">
                    <form onSubmit={handleSubmit} 
                    >
                        <table className="container" >
                            <tr>
                                <td><label>Name</label></td>
                                <td>  <input name="name" value={inputs.name}  type="text" onChange={handleChange} autoComplete="off" required/></td>
                            </tr>
                            <tr>
                                <td>  <label>Last Name</label></td>
                                <td>  <input name="lastName" value={inputs.lastName}  type="text" onChange={handleChange} autoComplete="off" required/>   </td>
                             </tr>
                            <tr>
                                <td><label>Age</label></td>
                                <td> <input name="age" value={inputs.age} type="number" onChange={handleChange} autoComplete="off" required/></td>
                            </tr>
                            <tr>
                                <td><label>Phone number</label></td>
                                <td><input name="phone" value={inputs.phone} type="text" maxLength={10} minLength={10} autoComplete="off" onChange={handleChange} required /></td>
                            </tr>
                            <tr>
                                <td> <label>Adress</label></td>
                                <td> <input name="city" value={inputs.city} type="text" onChange={handleChange} autoComplete="off" required/></td>
                            </tr>
                            <tr>
                                <td> <label>Education</label></td>
                                <td><input name="education" value={inputs.education} type="text" onChange={handleChange} autoComplete="off" required/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button className="mainbutton" type="submit"  >{editClick ? "update" : "Submit" }</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div>
                    <div className="table_container">
                        <table className="table_innercontainer" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Adress</th>
                                    <th>Ecucation</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                {tableData.map((item, i) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.city}</td>
                                        <td>{item.education}</td>
                                        <td className="table_main_button">
                                            <button className="table_button" onClick={() => handleEdit(i)}>Edit</button>
                                            <button className="table_button" onClick={() => handleDelete(i)}> Delete </button> 
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
