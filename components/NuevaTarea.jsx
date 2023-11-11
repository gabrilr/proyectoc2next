"use client"

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import moment from 'moment';
 
export function NuevaTarea({ tareas, setTareas }) {

  const fechaAct = () => {
    var date = moment();
    return date.format('DD/MM/YYYY');
  }

  const [titulo, setTitulo] = useState();
  const [responsable, setResponsable] = useState();
  const [descripcion, setDescripcion] = useState();
  const [fecha, setFecha] = useState(fechaAct());

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);


  const handleSendData = async () => {

    if (titulo && descripcion && fecha) {

      const d = {
        title: titulo,
        desc: descripcion,
        resp: responsable,
        date: fecha,
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(d),

      }
      const data = await fetch('http://127.0.0.1:3002/api/registrar', options);
      const datos = await data.json();
      setTareas([
        ...tareas,
        {
          id : datos._id,
          title : datos.title,
          desc: datos.desc,
          resp: datos.resp,
          date: datos.date,
          status: "Pendiente"
        }
      ])
      setOpen(!open);
    } else {
      
      alert('Falta rellenar campos');
    }
  };
 
  return (
    <>
      <Button onClick={handleOpen}>Nueva Tarea</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Nueva Tarea
            </Typography>
          </DialogHeader>
        </div>
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Titulo
            </Typography>
            <Input label="Titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
            <Input label="Responsable" id="responsable" onChange={(e) => setResponsable(e.target.value)}/>
            <Textarea label="Descripción" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}/>
            <Input label="Fecha" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Volver
          </Button>
          <Button variant="gradient" color="gray" onClick={handleSendData}>
            Guardar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}