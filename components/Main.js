import { useState } from "react";
import Table from "@/components/Table";
import Footer from "@/components/Footer";
import ReportTable from "./ReportTable";

export default function Main() {
  const [formdata, setFormdata] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInputs = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    };
    setFormdata([...formdata,formInputs]);
  };
  return (
    <>
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <div className=" bg-green-500 p-10 rounded-2xl">
        <h2 className="text-center text-3xl font-bold">Create Cookie Stand</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex p-10">
            <label className="text-xl font-medium">Location:</label>
            <input name="location" className="w-full" />
          </div>
          <div className="flex font-medium text-center">
            <div className="flex flex-col p-10">
              <label className="text-xl ">Minimum Customers per Hour:</label>
              <input type="number" name="min"  />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Maximum Customers per Hour:</label>
              <input type="number" name="max" />
            </div>
            <div className="flex flex-col p-10">
              <label className="text-xl">Average Cookie per Sale:</label>
              <input type="number" name="avg" />
            </div>
            <button type="submit" className="bg-green-700 p-10">
              Create
            </button>
          </div>
        </form>
      </div>
      <div>
        <Table table={formdata} />
      </div>
      <div>
        <ReportTable/>
      </div>
    </main>
      <Footer length = {formdata.length}/>
      </>
  );
}