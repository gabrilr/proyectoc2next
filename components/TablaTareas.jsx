"use client";
import React, { useState, useEffect } from 'react';
import { Card, Option, Select, Typography } from "@material-tailwind/react";

import { DialogTarea } from "../components/NuevaTarea";

export function TablaTa() {
  const [tareas, setTareas] = useState([]);

    // Función para realizar la solicitud y obtener las tareas
    const obtenerTareas = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        }
        const data = await fetch('http://127.0.0.1:3002/api/obtener/tasks', options);
        //const datos = data.json();
        if (data.ok) {
          const datos = await data.json(); // Extraer los datos del cuerpo de la respuesta
          console.log(JSON.stringify(datos));
          setTareas(datos);

        } else { alert(data.status) }

      } catch (error) {
        console.error('Error al obtener las tareas:', error);
      }
    };

  useEffect(() => {
    // Llama a la función para obtener las tareas cuando el componente se monta
    obtenerTareas();
  }, []);

  //const [estatus, setEstatus] = useState('Pendiente');

  const handleChangeEstatus = async (e, _id, title, desc, resp, date) => {

    const apiUrl = `http://localhost:3002/api/actualizar/${_id}`;

    const data = {
      title: title,
      desc: desc,
      resp: resp,
      date: date,
      status: e.target.value,
    };

    await fetch(apiUrl, {
      method: 'PUT', // Utilizamos el método PUT para actualizar el objeto
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convierte el objeto a una cadena JSON antes de enviarlo en el cuerpo
    })
      .then(response => response.json())
      .then(updatedData => {
        console.log('Objeto actualizado:', updatedData);
      })
      .catch(error => {
        console.error('Error al actualizar el objeto:', error);
      });

      obtenerTareas();
  };

  const tabla_head = ["Tarea", "Descripcion", "Responsable", "Fecha", "Estatus"];

  return (
    <div className="flex">
      <div className="w-1/12"></div>
      <div className="w-10/12">
        <div className="flex flex-row-reverse justify-between items-end w-full mb-2">
          <DialogTarea
            tareas={tareas}
            setTareas={setTareas}
          />
        </div>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {tabla_head.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70 text-left "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tareas.map(({ _id, title, desc, resp, date, status }, index) => {
                const isLast = index === tareas.length - 1;
                const classes = isLast
                  ? " pl-1 py-4"
                  : " pl-1 py-4 border-b border-blue-gray-50 gap-6";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {desc}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {resp}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <div className="">
                          <select key={_id} class="p-2 border border-gray-300 rounded" value={status} onChange={(e) => handleChangeEstatus(e, _id)}>
                            <option value="Pendiente">Pendiente</option>
                            <option value="En proceso">En proceso</option>
                            <option value="Finalizado">Finalizado</option>
                          </select>

                          {/* <Select label="Estatus" success onChange={handleChangeEstatus} value={estatus}
                            selected={(element) =>
                              element &&
                              React.cloneElement(element, {
                                disabled: true,
                                className:
                                  "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                              })
                            }>
                            <Option value="En proceso">En proceso</Option>
                            <Option value="Finalizado">Finalizado</Option>
                          </Select> */}
                        </div>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="w-1/12"></div>
    </div>
  );
}
