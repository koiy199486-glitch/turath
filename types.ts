
export enum Screen {
  Welcome,
  Login,
  SignUp,
  Terms,
  Otp,
  Home,
  TeacherDetail,
  CourseDetail,
  Lecture,
  Blog
}

export interface Teacher {
  id: number;
  name: string;
  specialization: string;
  avatar: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  price: string;
  teacher: Teacher;
  image: string;
}

export interface Subject {
  id: number;
  name: string;
  image: string;
}

export interface Lecture {
  id: number;
  title: string;
  chapter: string;
  isLocked: boolean;
}

export interface Assignment {
  id: number;
  title: string;
  isTimed: boolean;
  requiresCamera: boolean;
}

export interface Exam {
    id: number;
    title: string;
    isTimed: boolean;
    requiresCamera: boolean;
}
