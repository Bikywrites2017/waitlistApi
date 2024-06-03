import { Body, Controller, Get, Post } from '@nestjs/common';
import { AmbassadorService } from './ambassador.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AmbassadorDto } from 'dto/common';

@ApiTags('Ambassador')
@Controller('ambassador')
export class AmbassadorController {
  constructor(private readonly ambassadorService: AmbassadorService) {}
  @Post('/')
  @ApiBody({ type: AmbassadorDto })
  async createAmbassadors(@Body() inputDTO: AmbassadorDto): Promise<any> {
    const newAmbassador = await this.ambassadorService.create(inputDTO);
    return newAmbassador;
  }
  @Get('/')
  async getAllAmbassadors(): Promise<any> {
    const ambassadors = await this.ambassadorService.findAll();
    return ambassadors;
  }
}
