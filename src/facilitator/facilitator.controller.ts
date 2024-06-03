import { Body, Controller, Get, Post } from '@nestjs/common';
import { FacilitatorService } from './facilitator.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FacilitatorDto } from 'dto/common';

@ApiTags('Facilitator')
@Controller('facilitator')
export class FacilitatorController {
  constructor(private readonly facilitatorService: FacilitatorService) {}
  @Post('/')
  @ApiBody({ type: FacilitatorDto })
  async createFacilitators(@Body() inputDTO: FacilitatorDto): Promise<any> {
    const newFacilitator = await this.facilitatorService.create(inputDTO);
    return newFacilitator;
  }
  @Get('/')
  async getAllFacilitators(): Promise<any> {
    const facilitators = await this.facilitatorService.findAll();
    return facilitators;
  }
}
