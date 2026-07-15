"use client"
import Link from "next/link";
import { useEffect, useState ,use} from "react";

export default  function User({params}) {
    const {id} = use(params);
    console.log(id);
  const [user, setUser] = useState({});

  const getUser = async (i) => {
    const res = await fetch(`/api/users/${i}`)
    const data = await res.json()
    setUser(data);
    console.log(data)
  }

  useEffect(async () => {
    await getUser(id);
  }, [])
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {
              <div key={user.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">#{user.id} - {user.name}</h3>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Email:</span> {user.email}</p>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Phone:</span> {user.email}</p>
                <p className="text-sm text-gray-600"><span className="font-medium text-gray-800">Address:</span> {user.address}</p>
              </div>
            
          }



        </div>

      </div>
    </>
  );
}
