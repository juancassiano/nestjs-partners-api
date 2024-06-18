import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @HttpCode(201)
  @Post()
  create(@Body() criarLugarRequest: CriarLugarRequest, @Param('eventoId') eventId: string){
    return this.spotsService.create({
      eventId,
      name: criarLugarRequest.nome,
    });
  }

  @Get()
  findAll(@Param('eventoId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('id') spotId: string, @Param('eventoId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(@Param('id') spotId: string, @Param('eventoId') eventId: string, @Body() atualizarLugarRequest: AtualizarLugarRequest) {
    return this.spotsService.update(eventId, spotId, {name: atualizarLugarRequest.nome});
  }

  @HttpCode(204)
  @Delete(':spotId')
  remove(@Param('id') spotId: string, @Param('eventoId') eventId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
