import React, { useReducer, useState } from "react";

const dataa = [];

const reduce = (datas, action) => {
  switch (action.type) {
    case "Add":
      return [...datas, action.payload];

    case "Delete":
      return datas.filter((e) => e.id !== action.payload.id);

    case "Update":
      return datas.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );

    default:
      return datas;
  }
};

const UserManage = () => {
  const [datas, dispatch] = useReducer(reduce, dataa);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);

  const handleClick = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    const newdata = {
      id: Date.now(),
      userName: name,
    };

    dispatch({
      type: "Add",
      payload: newdata,
    });

    setName("");
  };

  const handleEdit = (user) => {
    setName(user.userName);
    setEdit(user.id);
  };

  const handleDelete = (delet) => {
    dispatch({
      type: "Delete",
      payload: delet,
    });
  };

  const handleUpdate = () => {
    dispatch({
      type: "Update",
      payload: {
        id: edit,
        userName: name,
      },
    });

    setName("");
    setEdit(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          User Management
        </h1>

        {/* Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={name}
            onChange={handleClick}
            placeholder="Enter Name"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {edit === null ? (
            <button
              onClick={handleAdd}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg"
            >
              Update
            </button>
          )}
        </div>

        {/* Table */}
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Edit</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>

          <tbody>
            {datas.length > 0 ? (
              datas.map((e, index) => (
                <tr key={e.id} className="text-center hover:bg-gray-100">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{e.userName}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(e)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(e)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500"
                >
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default UserManage;