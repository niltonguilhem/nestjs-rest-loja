import { Body, Controller, Get, Post } from '@nestjs/common';

import { ProdutoRepository } from './produto.repository';
import { CriarProdutoDTO } from './dto/CriaProduto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  criaNovo(@Body() dadosProduto: CriarProdutoDTO) {
    const produtoCadastrado = this.produtoRepository.salva(dadosProduto);
    return produtoCadastrado;
  }

  @Get()
  listaTodos() {
    return this.produtoRepository.listaTodos();
  }
}
