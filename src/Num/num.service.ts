import { Model } from 'mongoose';
import * as dayjs from 'dayjs';
import { InjectModel } from '@nestjs/mongoose';
import { Num, NumDocument } from './num.schema';
import { SaveNumDTO } from './num.dto';

export class NumService {
  constructor(
    @InjectModel('Num')
    private readonly numInfo: Model<NumDocument>,
  ) {}

  // 修改
  async save(id: string, body: SaveNumDTO): Promise<any> {
    try {
      return await this.numInfo.findByIdAndUpdate(id, {
        ...body,
        dateStr: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 查询全部
  async findAll(): Promise<Num[]> {
    try {
      return this.numInfo.find();
    } catch (err) {
      console.log(err);
    }
  }
}
