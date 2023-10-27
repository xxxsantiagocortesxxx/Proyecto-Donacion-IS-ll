'use client';

import { Sidebar } from 'flowbite-react';
import { HiInbox,HiUser, HiViewBoards,HiCollection } from 'react-icons/hi';
import { useModuleStore } from '../moduleStore';


export default function DefaultSidebar() {

  const { valor } = useModuleStore();

  return (
    <Sidebar aria-label="Default sidebar example" className=''>
      <Sidebar.Items className=''>
        <Sidebar.ItemGroup className=''>


          <Sidebar.Item
            
            icon={HiCollection}
            onClick={(e) => {
              valor(1);
            }}
          >
            <p>
              Registro
            </p>
          </Sidebar.Item>

          
          <Sidebar.Item
            
            icon={HiViewBoards}
            // label="Pro"
            // labelColor="dark"
            onClick={(e) => {
              valor(2);
            }}
          >
            <p>
              Consultar
            </p>
          </Sidebar.Item>


          <Sidebar.Item
            
            icon={HiInbox}
            // label="3"
            onClick={(e) => {
              valor(3);
            }}
            
          >
            <p>
              Modificar
            </p>
          </Sidebar.Item>

        
          <Sidebar.Item
            icon={HiUser}
            onClick={(e) => {
              valor(4);
            }}
          >
            <p>
              Eliminar
            </p>
          </Sidebar.Item>

         
        </Sidebar.ItemGroup>
      </Sidebar.Items>



    </Sidebar>
  )
}


