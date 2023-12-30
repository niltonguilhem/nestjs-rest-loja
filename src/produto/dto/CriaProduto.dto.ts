import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { type } from 'os';

export class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazia!' })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsUrl(undefined, { message: 'URL para imagem esta inválida!' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  descricao: string;
}

export class CriarProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero!' })
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade minima inválida!' })
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty({ message: 'Descrição do produto não pode ser vazio!' })
  @MaxLength(1000, {
    message: 'A descrição não pode utrapassar mil caracteres!',
  })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(2)
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  categoria: string;

  @IsDateString()
  dataCriacao: Date;

  @IsDateString()
  dataAtualizacao: Date;
}
