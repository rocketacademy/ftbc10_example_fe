import { useState, useEffect } from "react";
import axios from "axios";

function StudentsAddresses(props) {
  const [addresses, setAddresses] = useState([]);

  return (
    <div>
      {addresses && addresses.length > 0 ? (
        addresses.map((address) => {
          <div key={address.id}>{address.address}</div>;
        })
      ) : (
        <p>No addresses for this user</p>
      )}
    </div>
  );
}

export default StudentsAddresses;
