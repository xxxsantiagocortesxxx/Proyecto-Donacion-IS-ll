import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from 'src/dto/create-form.dto';
import { UpdateFormDto } from 'src/dto/update-form.dto';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  //obtener todos
  @Get()
  findAll() {
    return this.formService.findAll();
  }

  //obtener uno
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const form = await this.formService.findOne(id);
    if(!form){
        throw new NotFoundException('Form not found')
    }
    return form;
  }


  //Crear
  @Post()
  async create(@Body() body: CreateFormDto) {
    try {
      console.log('bodyxx',body)
      return await this.formService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('the form already exist xd');
      }
      throw error;
    }
  }

  //Eliminar
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.formService.delete(id);
  }

  //Actualizar
  @Put(':id')
   async update(@Param('id') id: string, @Body() body: UpdateFormDto) {
    const form = await this.formService.update(id, body);
    if(!form){
        throw new NotFoundException('Form not found')
    }
    return form;

  }



}
