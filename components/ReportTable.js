import React from "react";
import data, { hours,Total } from "@/data";

export default function ReportTable() {
  return (
    <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-green-500">
      <thead>
        <tr>
          <th className="border border-black">location</th>
          {hours.map((hour) => (
            <th className="border border-black">{hour}</th>
          ))}
          <th className="border border-black">Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td className="border border-black">{item.location}</td>
            {item.time_sale.map((x)=>(
                <td className="border border-black">{x}</td>
            ))}
            

          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
           <td className="border border-black">Total</td>
           {Total.map((x)=>(
            <td className="border border-black">{x}</td>
           ))}
        </tr>
      </tfoot>
    </table>
  );
}
