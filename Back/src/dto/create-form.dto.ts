import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateFormDto{


   // @IsString()
   documento: number;

   // @IsString()
   // @IsNotEmpty()
   nombre: string;

   // @IsString()
   // @IsNotEmpty()
   direccion: string;

   // @IsString()
   // @IsOptional()
   correo?: string; 

   estadoCivil: string;
}