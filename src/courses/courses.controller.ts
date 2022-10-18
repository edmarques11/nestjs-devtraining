import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { createCourseDTO } from './DTOs/createCourse.dto';

interface updateDataCourseDTO {
  name?: string;
  description?: string;
}

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body: createCourseDTO) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: updateDataCourseDTO) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
