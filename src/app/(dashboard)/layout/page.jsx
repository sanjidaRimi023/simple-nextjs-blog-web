import React from "react";

export default function DashboardLayout({ childern }) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <ul>
            <li>user</li>
            <li>profile </li>
            <li>blog</li>
          </ul>
        </div>

        <div className="col-span-9">{childern}</div>
      </div>
    </>
  );
}
