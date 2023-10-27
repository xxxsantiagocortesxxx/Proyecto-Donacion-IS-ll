import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Form } from '../schemas/form.shema';

import { CreateFormDto } from '../dto/create-form.dto';
import { UpdateFormDto } from '../dto/update-form.dto';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

  findAll() {
    return this.formModel.find();
  }

  //crear
  async create(createForm: CreateFormDto) {
    const newForm = new this.formModel(createForm);
    return newForm.save();
  }

  async findOne(id: string) {
    return this.formModel.findById(id);
  }

  //Eliminar
  async delete(id: string) {
    return this.formModel.findByIdAndDelete(id);
  }

  //Actualizar
  async update(id: string, form: UpdateFormDto) {
    return this.formModel.findByIdAndUpdate(id, form, { new: true });
  }
  
}
