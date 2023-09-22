import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { CreateAdminDTO } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminsService: AdminService) {}

  @Post('createAdmin')
  async create(@Body() createAdminDto: CreateAdminDTO) {
    return this.adminsService.create(createAdminDto);
  }

  @Get('findOne')
  async findOne(@Query() query: any) {
    return this.adminsService.findOne(query.account);
  }
}
