import { useState } from "react";

const Admin = () => {
    const [postPassword, setPostPassword] = useState("");
    const [Check,SetCheck]=useState("")

    const UpdatePassword = (e) => {
        setPostPassword(e.target.value);
    };

    const PasswordPosting = () => {
        localStorage.setItem("EmployeePassword", postPassword);
        SetCheck(localStorage.getItem("EmployeePassword"))

    };

    return (
        <div>
            <h1>Admin</h1>
            <input
                onChange={UpdatePassword}
                placeholder="Update Your Password"
                type="password"
            />
            <button onClick={PasswordPosting}>Log In</button>
            <p>{Check}</p>
        </div>
    );
};

export default Admin;
