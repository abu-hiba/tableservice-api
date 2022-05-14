import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateOrgDto } from './dto/create-organisation.dto';
import { OrgDto } from './dto/organisation.dto';
import { Org } from './interfaces/organisation.interface';
import { OrgService } from './organisation.service';

@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService) {}

    @Get('all')
    async findAll(): Promise<Org[]> {
        return await this.orgService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Org> {
        if (id) {
            return await this.orgService.findOne(id);
        }
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getLoggedInOrg(@Request() req): Promise<OrgDto> {
      const org = req.user;
      return org;
    }

    @Post()
    async create(@Body() createOrgDto: CreateOrgDto) {
        await this.orgService.create(createOrgDto);
        return { success: true };
    }
}
