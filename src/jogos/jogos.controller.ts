import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { jogosService } from './jogos.service';

@ApiTags('jogos')
@Controller('jogos')
export class jogosController {
  constructor(private jogosService: jogosService) {}

  @Get()
  findAll() {
    return this.jogosService.findAll();
  }

  @Post()
  create(@Body() createJogosDto: CreateJogosDto) {
    return this.jogosService.create(createJogosDto);
  }
}

