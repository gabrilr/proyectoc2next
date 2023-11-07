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
 
export function DialogTarea({ tareas, setTareas }) {

const [titulo, setTitulo] = useState();
const [descripcion, setDescripcion] = useState();
const [fecha, setFecha] = useState();

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  const fechaActual = () => { 
    const d = new Date();
    return (parseInt(d.getDay())+5) + "/" + (parseInt(d.getMonth())+1) + "/" + d.getFullYear();
  }

  const handleSendData = () => {

    setTareas([
      ...tareas,
      {
        name: titulo,
        desc: descripcion,
        date: fecha,
      }
    ]
    )
    
    setOpen(!open)
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
            <Textarea label="Descripción" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}/>
            <Input label="Fecha" id="fecha" onChange={(e) => setFecha(e.target.value)}/>
            {/* 
            <DatePicker label="Basic date picker" />
            */}
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