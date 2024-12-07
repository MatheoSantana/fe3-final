import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios(url).then((res) => {
      setDentist(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <h1>Detail Dentist </h1>
          {dentist && (
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email:</th>
                  <th>Teléfono:</th>
                  <th>Sitio Web:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{dentist.name}</th>
                  <th>{dentist.email}</th>
                  <th>{dentist.phone}</th>
                  <th>
                    <a
                      href={`https://${dentist.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dentist.website}
                    </a>
                  </th>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
