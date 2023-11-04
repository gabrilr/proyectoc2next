"use client"

import React from "react";
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
 
export function DialogTarea() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
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
            <Input label="Titulo" />
            <Textarea label="Descripción" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            Volver
          </Button>
          <Button variant="gradient" color="gray" onClick={handleOpen}>
            Guardar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}