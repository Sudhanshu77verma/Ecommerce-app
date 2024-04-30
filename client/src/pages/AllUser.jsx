import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import moment from "moment";
import UserRole from "../components/UserRole";
function AllUser() {
  const [userdata, setuserdata] = useState([]);

  const [updateuserdetails, setupdateuserdetails] = useState({
    name: "",
    email: "",
    role: "",
    _id: "",
  });

  const [action, setaction] = useState(false);

  // console.log(userdata);

  const fetchalluser = async () => {
    const res = await fetch("/api/user/all-users");
    const data = await res.json();
    if (data.success) {
      setuserdata(data.data);
    } else {
      toast.error(data.message);
      return;
    }
  };
  useEffect(() => {
    
    fetchalluser();
  }, []);

  return (
    <div>
      <table className="w-full   userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action </th>
          </tr>
        </thead>

        <tbody>
          {userdata.map((currentuser, index) => (
            <tr key={index}>
              <td>{index + 1} </td>
              <td>{currentuser?.name}</td>
              <td>{currentuser?.email}</td>
              <td>{currentuser?.role}</td>
              <td>{moment(currentuser?.createdAt).format("L")}</td>
              <td className="text-center">
                <button
                  className="p-2 text-white bg-green-300 rounded-full hover:bg-green-500 "
                  onClick={() => (
                    setupdateuserdetails(currentuser),
                    setaction((prev) => !prev)
                  )}
                >
                  <MdModeEdit></MdModeEdit>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {action && (
        <UserRole
          userid={updateuserdetails._id}
          email={updateuserdetails.email}
          role={updateuserdetails.role}
          name={updateuserdetails.name}
          onclose={() => setaction(false)}
          fetchfunction={fetchalluser}
          className="h-full w-full"
        ></UserRole>
      )}
    </div>
  );
}

export default AllUser;
