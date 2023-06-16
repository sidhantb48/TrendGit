import { useState, useEffect } from "react";
import UserData from "./userData/UserData";

function Hero() {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-4xl text-black-600 uppercase ">Trending</h2>
        <h3 className="py-3 text-2xl">
          See what the GitHub community is most excited about today.
        </h3>
        <table>
          <thead>
            <tr>
              <td>
                <button className="px-1 py-0 bg-blue-500 text-white rounded-md">
                  Repository
                </button>
              </td>
              <td className="pl-80">Name</td>
              <td className="pl-80">Email</td>
              <td className="pl-80">Address</td>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Hero;
