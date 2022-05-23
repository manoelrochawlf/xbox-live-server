import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogosDto } from './dto/create-jogos.dto';
import { Jogos } from './entities/jogos.entity';

@Injectable()
export class jogosService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.jogos.findMany();
  }

  create(createJogosDto: CreateJogosDto){
    const data: Jogos = {...createJogosDto};
    return this.prisma.jogos.create({
      data,
    })
  }
}
