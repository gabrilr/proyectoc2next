"use client";
import React, { useState } from 'react';
import { Card, Option, Select, Typography } from "@material-tailwind/react";

import { DialogTarea } from "../components/NuevaTarea";

export function TablaTa() {

  const [tareas, setTareas] = useState([
    {
      name: "Gabo",
      desc: "Nepew",
      date: "23/04/18",
    },
    {
      name: "Dani",
      desc: "Manager",
      date: "23/04/18",
    },
    {
      name: "Maese",
      desc: "Manager",
      date: "23/04/18",
    }
  ]);

  const TABLE_HEAD = ["Tarea", "Descripcion", "Fecha", "Estatus"];

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
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tareas.map(({ name, desc, date }, index) => {
                const isLast = index === tareas.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
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
                        <div className="w-12">
                          <Select label="Estatus" success>
                            <Option>Pendiente</Option>
                            <Option>Finalizado</Option>
                          </Select>
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
