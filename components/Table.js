export default function Table({ table: formdata }) {
    if (formdata.length == 0) {
        return (
            <h3 className="w-1/2 mx-auto my-8 text-2xl text-center">no Cookie Stand :( </h3>
        )
    }
    else {
        return (
            <table className="w-1/2 mx-auto my-8 text-2xl text-center bg-green-500">
                <thead>
                    <tr>
                        <th className="border border-black">location</th>
                        <th className="border border-black">Minimum Customers per Hour</th>
                        <th className="border border-black">Maximum Customers per Hour</th>
                        <th className="border border-black">Average Cookie per Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {formdata.map(item => (
                        <tr>
                            <td className="border border-black">{item.location}</td>
                            <td className="border border-black">{item.min}</td>
                            <td className="border border-black">{item.max}</td>
                            <td className="border border-black">{item.avg}</td>
                        </tr>
                    ))

                    }
                </tbody>
            </table>
        )
    }
}