import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { WaitlistDto } from 'dto/common';

@ApiTags('Waitlist')
@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}
  @Post('/')
  @ApiBody({ type: WaitlistDto })
  async createWaitlist(@Body() inputDTO: WaitlistDto): Promise<any> {
    const newWaitlist = await this.waitlistService.create(inputDTO);
    return newWaitlist;
  }
  @Get('/')
  async getAllWaitlist(): Promise<any> {
    const waitlist = await this.waitlistService.findAll();
    return waitlist;
  }
}
