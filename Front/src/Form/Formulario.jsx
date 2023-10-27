import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { createFormRequest } from "../Api/form";


export const MiFormulario = () => {
  const [edad, setEdad] = useState(0);
  const [work, setWork] = useState("no");

  const [isVisible, setIsVisible] = useState({
    maritalState: false,
    company: false,
    company2: true,
  });

  //visibles
  const marital = (event) => {
    if (
      document.getElementById("maritalStatus").selected == true ||
      document.getElementById("maritalStatus2").selected == true
    ) {
      setIsVisible({
        ...isVisible,
        maritalState: true,
      });
    } else {
      setIsVisible({
        ...isVisible,
        maritalState: false,
      });
    }
  };

  const company = (event) => {
    setWork(event.target.value);

    if (document.getElementById("otherCompany").selected == true) {
      setIsVisible({
        ...isVisible,
        company: true,
        company2: false,
      });
    } else {
      setIsVisible({
        ...isVisible,
        company: false,
        company2: true,
      });
    }
  };

  // --------------------

  // calcular edad
  const handleChangeDate = (event) => {
    let hoy = new Date();
    let fechaNacimiento = new Date(event.target.value);
    let _edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      _edad--;
    }
    formik.initialValues.edadNiño= _edad;
    setEdad(_edad);
    
  };

  const formik = useFormik({
    initialValues: {
      documento: "",
      nombre: "",
      direccion: "",
      correo: "",
      estadoCivil: "soltero",
      idConyuge: "",
      nombreConyuge: "",
      trabaja: "no",
      // nombreNiño: "",
      // documentoNiño: "",
      // fechaNacimiento: "",
      // edadNiño: "",
      // autorizacion: "",
      // curso: "",
    },
    validationSchema: Yup.object({
      documento: Yup.number()
        .required("Documento Requerido")
        .positive("deben ser digitos positivos"),
      nombre: Yup.string().required("Nombre Requerido"),
       direccion: Yup.string().required("Direccion Requerida"),
      correo: Yup.string().email("deber ser un correo valido")
      //     .email("escriba un correo valido")
      //     .required("Correo Requerido"),
      //   idConyuge: Yup.number()
      //     .required("Documento Requerido")
      //     .positive("deben ser digitos positivos"),
      //   nombreConyuge: Yup.string().required("Nombre Requerido"),
      //   nombreNiño: Yup.string().required("Nombre Requerido"),
      //   documentoNiño: Yup.number()
      //     .required("Documento Requerido")
      //     .positive("deben ser digitos positivos"),
    }),
    onSubmit: async (values) => {
      //puedo capturar la informacion
      alert(JSON.stringify(values, null, 2));

      const res = await createFormRequest(values);
      const data = await res.json()
      console.log(data);


    },
  });

  ////////
  return (
    <div className="md:flex md:justify-center md:gap-10 md:items-center m-5">
      <div className="md:w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={formik.handleSubmit}>
          {/* documento */}
          <label
            htmlFor="documento"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Documento
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            id="documento"
            type="text"
            placeholder="Documento"
            {...formik.getFieldProps("documento")}
          />
          {formik.touched.documento && formik.errors.documento ? (
            <div>{formik.errors.documento}</div>
          ) : null}

          {/* /////////////////////////////////////////////////////////// */}
          {/* nombre */}
          <label
            htmlFor="nombre"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Nombre
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            placeholder="Nombre"
            id="nombre"
            type="text"
            {...formik.getFieldProps("nombre")}
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <div>{formik.errors.nombre}</div>
          ) : null}

          {/* direccion */}

          <label
            htmlFor="direccion"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            direccion
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            placeholder="direccion"
            id="direccion"
            type="text"
            {...formik.getFieldProps("direccion")}
          />
          {formik.touched.direccion && formik.errors.direccion ? (
            <div>{formik.errors.direccion}</div>
          ) : null}

          {/* correo */}
          <label
            htmlFor="correo"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            correo
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            placeholder="correo"
            id="correo"
            type="text"
            {...formik.getFieldProps("correo")}
          />
          {formik.touched.correo && formik.errors.correo ? (
            <div>{formik.errors.correo}</div>
          ) : null}

          {/* estado civil*/}
          <label
            htmlFor="estadoCivil"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            estado civil
          </label>

          <select
            className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
            id="estadoCivil"
            onChangeCapture={marital}
            {...formik.getFieldProps("estadoCivil")}
          >
            <option value="soltero">Soltero</option>
            <option id="maritalStatus" value="Union Libre">
              Union libre
            </option>
            <option id="maritalStatus2" value="Casado">
              Casado
            </option>
          </select>
          {formik.touched.estadoCivil && formik.errors.estadoCivil ? (
            <div>{formik.errors.estadoCivil}</div>
          ) : null}

          {/*Documento conyuge */}
          {isVisible.maritalState && (
            <div className="mb-5">
              <label
                htmlFor="idConyuge"
                className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                idConyuge
              </label>

              <input
                className="border p-3 w-full rounded-lg invalid:border-pink-500"
                placeholder="Documento Conyuge"
                id="idConyuge"
                type="text"
                {...formik.getFieldProps("idConyuge")}
              />
              {formik.touched.idConyuge && formik.errors.idConyuge ? (
                <div>{formik.errors.idConyuge}</div>
              ) : null}
            </div>
          )}

          {/* nombre conyuge */}
          {isVisible.maritalState && (
            <div className="mb-5">
              <label className="mb-2 block uppercase text-gray-500 font-bold">
                Nombre de Cónyuge:
              </label>

              <input
                id="nombreConyuge"
                type="text"
                placeholder="Nombre de cónyuge"
                className="border p-3 w-full rounded-lg"
                {...formik.getFieldProps("nombreConyuge")}
              />
              {formik.touched.nombreConyuge && formik.errors.nombreConyuge ? (
                <div>{formik.errors.nombreConyuge}</div>
              ) : null}
            </div>
          )}

          {/* TRABAJO ACTUAL */}
          <div className="mb-5">
            <label className="mb-2 block uppercase text-gray-500 font-bold">
              ¿Tiene trabajo?
            </label>

            <select
              onChangeCapture={company}
              className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
              id="trabaja"
              {...formik.getFieldProps("trabaja")}
            >
              <option value="si" id="otherCompany">
                Si
              </option>
              <option value="no" id="otherCompany2" selected>
                No
              </option>
            </select>
          </div>

          {/* publico o privado */}

          {isVisible.company && (
            <div className="mb-5">
              <label
                for="company"
                class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Tipo de empleado:
              </label>
              <select
                className="mb-2 block text-gray-500 font-bold w-full p-3 rounded"
                id="trabajo"
              >
                <option value="publico">Publico</option>
                <option id="otherCompany" value="privado">
                  Privado
                </option>
              </select>

              <label
                for="company"
                class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Direccion Empresa:
              </label>

              <textarea name="" id="" cols="50" rows="1"></textarea>
            </div>
          )}

          {/* no trabaja, porque? */}
          {isVisible.company2 && (
            <div className="mb-5">
              <label
                for="company"
                class="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Descripcion del por que no trabaja:
              </label>
              <textarea name="" id="" cols="50" rows="5"></textarea>
            </div>
          )}

          {/* documento niño */}
          <label
            htmlFor="documentoNiño"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Documento del niño
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            placeholder="Documento"
            id="documentoNiño"
            type="text"
            {...formik.getFieldProps("documentoNiño")}
          />
          {formik.touched.documentoNiño && formik.errors.documentoNiño ? (
            <div>{formik.errors.documentoNiño}</div>
          ) : null}

          {/* nombre */}
          <label
            htmlFor="nombreNiño"
            className="mb-2 block uppercase text-gray-500 font-bold after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Nombre del niño 
          </label>

          <input
            className="border p-3 w-full rounded-lg invalid:border-pink-500"
            placeholder="Nombre niño"
            id="nombreNiño"
            type="text"
            {...formik.getFieldProps("nombreNiño")}
          />
          {formik.touched.nombreNiño && formik.errors.nombreNiño ? (
            <div>{formik.errors.nombreNiño}</div>
          ) : null}

          {/* FECHA */}
          <div className="mb-5">
            <label
              for="date"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Fecha:
            </label>
            <div className=" relative mb-3">
              <input
                className="border p-3 w-full rounded-lg invalid:border-pink-500 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Select a date"
                data-mdb-toggle="datepicker"
                name="Date"
                type="date"
                onChangeCapture={handleChangeDate}
                {...formik.getFieldProps("fechaNacimiento")}
              />
            </div>

            {/* IMPLEMENTAR ESTADO useState */}
            {/* <DatePicker value={selectedDate} onChange={changeSelectedDate} />  */}
          </div>

          {/* edad */}
          <div className="mb-5">
            <label
              htmlFor="edadNiño"
              className="mb-2 block uppercase text-gray-500 font-bold"
            >
              Edad:
            </label>
            <input
              className="border p-3 w-full rounded-lg invalid:border-pink-500"
              id="edadNiño"
              placeholder=".  .  ."             
              value={edad}
              readOnly
              type="text"
               
            />
          </div>

          {work === "no" && edad >= 6 && edad <= 12 && (
            <div className="mb-5">
              <input
                disabled
                name="nameAcudent"
                type="text"
                id="text"
                value={"Candidato"}
                className=" bg-green-400 border-none text-white p-3 w-full rounded-lg "
              />
            </div>
          )}

          <div className="mb-5 flex justify-between items-center font-serif">
            <input name="" type="checkbox" id="" className="" />

            <label  className=" text-gray-800 text-right">
              Autorización para publicar datos y fotografías del niño en la
              pagina
            </label>
          </div>

          <hr />
          <hr />

          {/* Cursos  */}

          <div className="mb-5 flex justify-between items-center ">
            <label  className=" text-gray-800">
              Canto
            </label>

            <input name="" type="checkbox" id="" className="rounded-xl" />
          </div>

          <div className="mb-5 flex justify-between items-center ">
            <label for="date" className=" text-gray-800">
              Guitarra
            </label>

            <input name="" type="checkbox" id="" className="rounded-xl" />
          </div>

          <div className="mb-5 flex justify-between items-center ">
            <label className=" text-gray-800">
              Piano
            </label>

            <input name="" type="checkbox" id="" className="rounded-xl" />
          </div>

          <div className="mb-5 flex justify-between items-center ">
            <label  className=" text-gray-800">
              Trompeta
            </label>

            <input name="" type="checkbox" id="" className="rounded-xl" />
          </div>

          {/*--------------------- enviar ---------------------*/}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white active:bg-green-700 hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};
