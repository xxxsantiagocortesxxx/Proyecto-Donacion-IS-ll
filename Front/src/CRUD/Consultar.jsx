import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";

import { getFormsRequest } from "../Api/form";

export default function StripedRows() {

  const [form, setform] = useState([])

  useEffect(()=>{ 
    getFormsRequest().then((data)=>setform(data.data) )
  },[])
  
  return (
    
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
      <div className=" bg-white p-6 rounded-lg shadow-lg overflow-scroll">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Nombre Padre</Table.HeadCell>

            <Table.HeadCell>Documento </Table.HeadCell>

            <Table.HeadCell>Direccion</Table.HeadCell>

            <Table.HeadCell>Correo</Table.HeadCell>

            <Table.HeadCell>Estado civil</Table.HeadCell>

            <Table.HeadCell>Id Conyugue</Table.HeadCell>
            
            <Table.HeadCell>Nombre COnyuge</Table.HeadCell>

            <Table.HeadCell>Trabaja</Table.HeadCell>

          </Table.Head>
          <Table.Body className="divide-y">
            {
            
            form.map( form => (
              <Table.Row
                // key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

                  {form.nombre}

                </Table.Cell>

                <Table.Cell>
                  {form.documento}
                </Table.Cell>


                <Table.Cell>
                  {form.direccion}
                </Table.Cell>

                <Table.Cell>
                  {form.correo}
                </Table.Cell>

                <Table.Cell>
                  {form.estadoCivil}
                </Table.Cell>

                <Table.Cell>
                  {form.idConyuge}
                </Table.Cell>

                <Table.Cell>
                  {form.nombreConyuge}
                </Table.Cell>

                <Table.Cell>
                  {form.trabaja}
                </Table.Cell>

                

              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
