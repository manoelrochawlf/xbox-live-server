import { ApiProperty } from '@nestjs/swagger';

export class CreateJogosDto {
  @ApiProperty({
    description: 'O nome de um jogo',
    example: 'ihidsf',
  })
  title: string;
}
