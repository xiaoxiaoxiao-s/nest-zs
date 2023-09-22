import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { CreateDynamicDTO, SaveDynamicDTO } from './dynamic.dto';
import { DynamicService } from './dynamic.service';

@Controller('dynamic')
export class DynamicController {
  constructor(private readonly caseService: DynamicService) {}

  @Post('create')
  async create(@Body() createAdminDto: CreateDynamicDTO) {
    try {
      const data = await this.caseService.create(createAdminDto);
      return {
        code: 0,
        data,
        msg: '新增成功',
      };
    } catch (err) {
      return {
        code: 301,
        data: undefined,
        msg: '新增失败:' + err,
      };
    }
  }

  @Post('save')
  async save(@Body() saveCaseDTO: SaveDynamicDTO & { id: string }) {
    try {
      const data = await this.caseService.save(saveCaseDTO.id, saveCaseDTO);
      return {
        code: 0,
        data,
        msg: '保存成功',
      };
    } catch (err) {
      return {
        code: 301,
        data: undefined,
        msg: '保存失败:' + err,
      };
    }
  }

  @Post('delete')
  async delete(@Body() saveCaseDTO: { id: string }) {
    try {
      const data = await this.caseService.delete(saveCaseDTO.id);
      return {
        code: 0,
        data,
        msg: '删除成功',
      };
    } catch (err) {
      return {
        code: 301,
        data: undefined,
        msg: '删除失败:' + err,
      };
    }
  }

  @Get('list')
  async findAll() {
    try {
      const data = await this.caseService.findAll();
      return {
        code: 0,
        data,
        msg: '获取成功',
      };
    } catch (err) {
      return {
        code: 301,
        data: undefined,
        msg: '获取失败:' + err,
      };
    }
  }

  @Get('detail')
  async findOne(@Query() query: any) {
    try {
      const data = await this.caseService.findOne(query.id);
      return {
        code: 0,
        data,
        msg: '获取成功',
      };
    } catch (err) {
      return {
        code: 301,
        data: undefined,
        msg: '获取失败:' + err,
      };
    }
  }
}
