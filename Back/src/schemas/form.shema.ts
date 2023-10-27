import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Form {

    @Prop({
        // unique: true,
        // required: true,
        trim: true,
    })
    documento: string;

    @Prop({
        trim: true,
    })
    nombre: string;

    @Prop({
        trim: true,       
    })
    direccion: string;

    @Prop({
        trim: true,       
    })
    correo: string;

    @Prop({
        trim: true,       
    })
    estadoCivil: string;

    @Prop({
        trim: true,       
    })
    idConyuge: string;

    @Prop({
        trim: true,       
    })
    nombreConyuge: string;

    @Prop({
        trim: true,       
    })
    trabaja: string;
}

 export const FormSchema = SchemaFactory.createForClass(Form)