"use client"

import Error from "./Error";

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
 
export function DialogTarea({ tareas, setTareas }) {

  const fechaAct = () => {
    var date = moment();
    //console.log( date.format('DD/MM/YYYY'));
    return date.format('DD/MM/YYYY');
  }

  const [titulo, setTitulo] = useState();
  const [descripcion, setDescripcion] = useState();
  const [fecha, setFecha] = useState(fechaAct());
  const [error, setError] =  useState(false);

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => {
    setError(false);
    setOpen(!open);
  }


  const handleSendData = () => {

    if (titulo && descripcion && fecha) {
      
      setTareas([
        ...tareas,
        {
          name: titulo,
          desc: descripcion,
          date: fecha,
        }
      ])

      setTitulo('');
      setDescripcion('');

      setError(false);
      setOpen(!open);
    } else {
      setError(true)
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
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <DialogBody>
          <div className="grid gap-6">
            <Typography className="-mb-1" color="blue-gray" variant="h6">
              Titulo
            </Typography>
            <Input label="Titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
            <Textarea label="Descripción" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}/>
            <Input label="Fecha" id="fecha" placeholder="" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
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