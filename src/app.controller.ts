import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/img',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtension = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
        },
      }),
    }),
  )
  upload(@UploadedFile() file) {
    console.log('file', file, process.env);

    // const host =
    //body为form/data中的其他非文件参数
    return {
      code: 0,
      data: 'http://129.204.199.243/img/' + file.filename,
      // data: 'http://127.0.0.1:3000/' + file.filename,
      status: 0,
      msg: '上传成功',
    };
  }
}
