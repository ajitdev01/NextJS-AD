"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("/api/users")
    const data = await res.json()
    setUsers(data);
    // console.log(data)
  }

  useEffect(async () => {
    await getUsers();
  }, [])
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {
            users.map((user) => (
              <div key={user.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">#{user.id} - {user.name}</h3>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Email:</span> {user.email}</p>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Phone:</span> {user.email}</p>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Address:</span> {user.address}</p>
              </div>
            ))
          }



        </div>

      </div>
    </>
  );
}
