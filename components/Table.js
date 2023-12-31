import data, { hours, Total, num } from "@/data";
import { FiTrash } from "react-icons/fi";
export default function Table({ table: formdata ,setFormdata}) {
    function handleDlete(indx){
        let newdata = formdata.filter((i,index)=> index !== indx);
        setFormdata(newdata)
    }
  if (formdata.length == 0) {
    return (
      <h3  className="w-1/2 mx-auto my-8 text-2xl text-center">
        no Cookie Stand :({" "}
      </h3>
    );
  } else {
    return (
      <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-green-500">
        <thead>
          <tr>
            <th className="border border-black">location</th>
            {hours.map((hour) => (
              <th key={hour} className="border border-black">{hour}</th>
            ))}
            <th className="border border-black">Total</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map((item,indx) => (
            <tr key={item}>
              <td key={item} className="border  border-black">{item.location}
              <button key={item} onClick={()=>handleDlete(indx)}><FiTrash/></button>
              </td>
    
          
            {num.map((x)=>(
                <td key={x} className="border border-black">{x}</td>
            ))}
                     
        
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
           <td className="border border-black">Total</td>
           {num.map((x)=>(
            <td key={num} className="border border-black">{x*formdata.length}</td>
           ))}
        </tr>
      </tfoot>
      </table>
    );
  }
}
