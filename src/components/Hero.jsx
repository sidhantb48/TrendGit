import { useEffect, useState } from "react";
import Select from "react-select";
import UserData from "./userData/UserData";

function Hero() {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const options = [
    { value: "id", label: "ID" },
    { value: "az", label: "A-Z" },
    { value: "za", label: "Z-A" },
  ];

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

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);
  };

  const sortUsers = (users, sortOption) => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      if (sortOption === "id") {
        return a.id - b.id;
      } else if (sortOption === "az") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "za") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    return sortedUsers;
  };

  const sortedUsers = sortUsers(users, sortOption);

  // Styles for the Select component
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#FFDAB9",
      color: "black",
    }),
    option: (styles, { data }) => ({
      ...styles,
      color: "black",
    }),
  };

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-4xl text-black-600 uppercase">Trending 📈</h2>
        <h3 className="py-3 text-2xl">
          See what the GitHub community is most excited about today.
        </h3>
        <table>
          <thead>
            <tr>
              <td>
                <button className="px-2 py-0 bg-blue-500 text-white rounded-md">
                  Repository
                </button>
              </td>
              {/* <td className="ml-80 ">
                <Select
                  options={options}
                  onChange={handleSortChange}
                  value={options.find((option) => option.value === sortOption)}
                  styles={selectStyles}
                />
              </td>
              <td className="ml-80">
                <Select
                  options={options}
                  onChange={handleSortChange}
                  value={options.find((option) => option.value === sortOption)}
                  styles={selectStyles}
                />
              </td> */}
              <td className="ml-80">
                <Select
                  options={options}
                  onChange={handleSortChange}
                  value={options.find((option) => option.value === sortOption)}
                  styles={selectStyles}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <UserData users={sortedUsers} />
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Hero;
