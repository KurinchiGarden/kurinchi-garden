import React from "react";

const Sites = () => {
  const sites = [
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
    { plotNo: 1, sqFt: 1900.55, cent: 4.36 },
  ];
  return (
    <section>
      <div className="w-10/12 m-auto flex justify-center items-center p-10 ">
        <div>
          <table>
            <thead>
              <tr>
                <th>Plot No</th>
                <th>Sq Ft</th>
                <th>Cent</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((x) => {
                return (
                  <tr>
                    <td>{x.plotNo}</td>
                    <td>{x.sqFt}</td>
                    <td>{x.cent}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Sites;
