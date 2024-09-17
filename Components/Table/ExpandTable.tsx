"use client";
import React from "react";
import { Details } from "./ExpandableTable";

const Table=({data}:{
    data: Details[]
})=>{
    return (<tr>
              <td colSpan={4} className="px-6 py-4 bg-gray-50">
                <div className="max-h-60 overflow-y-auto">
                  <table className="container divide-y divide-gray-200" id='secondary_table'>
                    <thead className="bg-gray-50 text-base sticky top-0">
                      <tr>
                        <th className="px-4 py-3"></th>
                        <th className="px-4 py-3"></th>
                        <th className="px-4 py-3 text-left text-gray-600 font-bold uppercase tracking-wider">Job Title</th>
                        <th className="px-4 py-3 text-left text-gray-600 font-bold uppercase tracking-wider">Total Jobs</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.map((row,index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.job_title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.count}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>);
};

export default Table;