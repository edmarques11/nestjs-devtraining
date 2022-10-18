import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

interface createCourseDTO {
  id: number;
  name: string;
  description: string;
  tags: string[];
}

interface updateCouseDTO {
  name?: string;
  description?: string;
  tags?: string[];
}

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
    return this.courses.find((course) => course.id === Number(id));
  }

  create(course: createCourseDTO): void {
    this.courses.push(course);
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
