import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './admin.schema';
import { CreateAdminDTO } from './admin.dto';

export class AdminService {
  constructor(@InjectModel('Admin') private adminInfo: Model<AdminDocument>) {}

  async create(createUserDto: CreateAdminDTO): Promise<Admin> {
    const createAdmin = new this.adminInfo(createUserDto);
    const temp = await createAdmin.save();
    return temp;
  }

  async findOne(account: string): Promise<Admin[]> {
    const temp = await this.adminInfo.find({ account });
    return temp;
  }
}
