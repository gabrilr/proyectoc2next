
"use client"

import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function ListaTareas() {

  const [tareasTer, setTareasTer] = useState([]);

  const obtenerTareas = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }
      const data = await fetch('http://localhost:3002/api/obtener/tasks/end/Finalizado', options);

      if (data.ok) {
        const datos = await data.json(); // Extraer los datos del cuerpo de la respuesta
        //console.log(JSON.stringify(datos));
        setTareasTer(datos);

      } else { alert(data.status) }

    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };

  useEffect(() => {
    // Obtenemos las tareas.
    obtenerTareas();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/12"></div>
      <div className="w-10/12">
        <Card>
          <List>
            {tareasTer.length === 0 ? (
              <p>No hay tareas concluidas</p>
            ) : (tareasTer.map(({_id, title, desc, resp, date, status}, index) => (

                <ListItem key={_id}>
                  <ListItemPrefix>
                    {/* <Avatar variant="circular" alt="candice" src="/img/face-1.jpg" /> */}
                    <Typography variant="h6" color="blue-gray">
                      {title}
                    </Typography>
                  </ListItemPrefix>
                  <div className="ml-4">
                    <Typography variant="h6" color="blue-gray">
                      {desc} -  Estatus: {status}
                    </Typography>
                    <Typography variant="small" color="gray" className="font-normal">
                      Responsable: <b>{resp}</b>, Fecha termino: {date}
                    </Typography>
                  </div>
                </ListItem>
            ))
            )}
          </List>
        </Card>
      </div>
      <div className="w-1/12"></div>
    </div>
  );
}