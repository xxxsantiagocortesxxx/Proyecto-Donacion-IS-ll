"use client";
import { useState } from "react";
import { deleteFormRequest } from "../Api/form";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function DefaultForm() {

  const [documento, setdocumento] = useState(0)
  return (
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
      <div className="md:w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4" >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Documento" />
            </div>
            <TextInput
            onChange={(e)=> setdocumento(e.target.value)}
              id="email1"
              placeholder="Ingresar Documento"
              required
              type="text"
            />
          </div>

          <div className="flex justify-between items-center gap-2 font-serif">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Esta seguro?</Label>
          </div>
          <Button 
          onClick={deleteFormRequest(documento)}
          type="submit" className="bg-red-700">
          
            Eliminar
          </Button>
        </form>
      </div>
    </div>
  );
}
