import { Model } from 'mongoose';
import * as dayjs from 'dayjs';
import { InjectModel } from '@nestjs/mongoose';
import { CaseDocument } from './case.schema';
import { CreateCaseDTO, SaveCaseDTO } from './case.dto';

export class CaseService {
  constructor(
    @InjectModel('Case') private readonly caseInfo: Model<CaseDocument>,
  ) {}

  // 新增
  async create(body: CreateCaseDTO): Promise<any> {
    try {
      return await this.caseInfo.create({
        ...body,
        dateStr: dayjs(body.date).format('YYYY-MM-DD HH:mm:ss'),
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 修改
  async save(id: string, body: SaveCaseDTO): Promise<any> {
    try {
      return await this.caseInfo.findByIdAndUpdate(id, {
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
      return await this.caseInfo.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
    }
  }

  // 查询全部
  async findAll(): Promise<any> {
    try {
      return this.caseInfo.find();
    } catch (err) {
      console.log(err);
    }
  }

  // 查询单个
  async findOne(id: string): Promise<any> {
    try {
      return this.caseInfo.findById(id);
    } catch (err) {
      console.log(err);
    }
  }
}
