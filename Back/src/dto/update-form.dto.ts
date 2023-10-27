import { IsString, IsOptional } from "class-validator";

export class UpdateFormDto{

   @IsString()
   @IsOptional()
   nombre?: string;

   @IsString()
   @IsOptional()
   direccion?: string;

   @IsString()
   @IsOptional()
   correo?: string; 
}