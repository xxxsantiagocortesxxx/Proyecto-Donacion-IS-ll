import axios from "axios";
import { useState } from "react";

export const getFormsRequest = () => {
  return axios.get("http://localhost:3000/form");
};

export const createFormRequest = (form) => {
  return axios.post("http://localhost:3000/form", form);
};


export const  deleteFormRequest = (documento) => {
  const [form, setform] = useState([]);

   axios.get("http://localhost:3000/form").then((data) => setform(data.data));

  for (let i = 0; i < form.length; i++) {
    if (form[i].documento === documento) {

        return axios.delete(`http://localhost:3000/form/${form[i]._id}`)
    }
  }

};
