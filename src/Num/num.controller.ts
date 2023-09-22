import { Controller, Body, Post, Get } from '@nestjs/common';
import { SaveNumDTO } from './num.dto';
import { NumService } from './num.service';

@Controller('num')
export class NumController {
  constructor(private readonly numService: NumService) {}

  @Post('save')
  async save(@Body() saveNumDTO: SaveNumDTO & { id: string }) {
    try {
      await this.numService.save(saveNumDTO.id, saveNumDTO);
      return {
        code: 0,
        data: undefined,
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

  @Get('findOne')
  async findOne() {
    try {
      const data = await this.numService.findAll();
      return {
        code: 0,
        data: data?.[0],
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
