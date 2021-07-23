import React from "react";

const Userlist = ({ dataFull }) => {
  console.log(dataFull);

  return (
    <div>
      <center>
        <h1>Data Merged</h1>
      </center>
      {dataFull.users.map((u) => (
        <p key={u.id}>coucou {u.firstName}</p>
      ))}

      {dataFull.formations.map((d) => (
        <p key={d.id}>la formation {d.formationName} est TOP</p>
      ))}
    </div>
  );
};

export default Userlist;
