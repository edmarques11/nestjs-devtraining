import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CoursesService } from './courses.service';

interface SaveCourseDTO {
  name: string;
  description?: string;
}

interface updateDataCourseDTO {
  name?: string;
  description?: string;
}

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(@Res() response: Response) {
    return response.status(HttpStatus.OK).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body: SaveCourseDTO) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: updateDataCourseDTO) {
    return `atualização do curso ${id}\n${JSON.stringify(body)}`;
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return `Exclusão do curso #${id}`;
  }
}
