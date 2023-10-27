'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="A&C"
              href="#"
              
              name="Arte y Cultura"
              src="/img/icono.jpg"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" >
                  arteyculturafundacion@gmail.edu.co.
                </Footer.Link>
                <Footer.Link href="#">
                  +57 310123456.
                </Footer.Link>

              </Footer.LinkGroup>       

            </div>
            <div>
              <Footer.Title title="Ubicacion" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  aguachica-cesar.
                </Footer.Link>
                <Footer.Link href="#">
                  Cll 5-12-33
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                 politca y privacidad
                </Footer.Link>
                <Footer.Link href="#">
                  terminos y condiciones
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
           
           
            year={2023}
            by="Arte Y Cultura"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


