import { Model } from 'mongoose';
import * as dayjs from 'dayjs';
import { InjectModel } from '@nestjs/mongoose';
import { Dynamic, DynamicDocument } from './dynamic.schema';
import { CreateDynamicDTO, SaveDynamicDTO } from './dynamic.dto';

export class DynamicService {
  constructor(
    @InjectModel('Dynamic')
    private readonly dynamicInfo: Model<DynamicDocument>,
  ) {}

  // 新增
  async create(body: CreateDynamicDTO): Promise<any> {
    try {
      return await this.dynamicInfo.create({
        ...body,
        dateStr: dayjs(body.date).format('YYYY-MM-DD HH:mm:ss'),
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 修改
  async save(id: string, body: SaveDynamicDTO): Promise<any> {
    try {
      return await this.dynamicInfo.findByIdAndUpdate(id, {
        ...body,
        dateStr: dayjs(body.date).format('YYYY-MM-DD HH:mm:ss'),
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 删除
  async delete(id: string): Promise<any> {
    try {
      return await this.dynamicInfo.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
  }

  // 查询全部
  async findAll(): Promise<Dynamic[]> {
    try {
      return this.dynamicInfo.find();
    } catch (err) {
      console.log(err);
    }
  }

  // 查询单个
  async findOne(id: string): Promise<Dynamic[]> {
    try {
      return this.dynamicInfo.findById(id);
    } catch (err) {
      console.log(err);
    }
  }
}
