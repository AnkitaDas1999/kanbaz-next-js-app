"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "./client";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(cid as string);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people-table">
      <h3>People</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-full-name text-nowrap">
                  {user.firstName} {user.lastName}
                </span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}