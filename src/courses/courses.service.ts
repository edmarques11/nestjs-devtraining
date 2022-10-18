import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createCourseDTO } from './DTOs/createCourse.dto';
import { updateCouseDTO } from './DTOs/updateCourse.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(course: createCourseDTO): void {
    const idCourse = this.courses.length + 1;
    this.courses.push({ id: idCourse, ...course });
  }

  update(id: string, data: updateCouseDTO): Course {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    const course = this.courses[indexCourse];

    Object.assign(course, data);

    return course;
  }

  remove(id: string): Course[] {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    const deletedCourse = this.courses.splice(indexCourse, 1);

    return deletedCourse;
  }
}
