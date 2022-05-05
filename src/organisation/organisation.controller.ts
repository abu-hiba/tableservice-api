import { Controller, Get, Post, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-organisation.dto';
import { Org } from './interfaces/organisation.interface';
import { OrgService } from './organisation.service';

@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService) {}

    @Get('all')
    async findAll(): Promise<Org[]> {
        return this.orgService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Org> {
        if (id) {
            return this.orgService.findOne(id);
        }
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND)
    }

    @Post()
    async create(@Body() createOrgDto: CreateOrgDto) {
        this.orgService.create(createOrgDto);
    }

}
