import { PartialType } from '@nestjs/mapped-types';
import { CriarEventoRequest } from './criar-eventos.request';

export class AtualizarEventoRequest extends PartialType(CriarEventoRequest) {}
