import { CreateStudentDto } from '../dto/create-student.dto';
import { IStudent } from '../interface/student.interface';
import { Model } from "mongoose";
import { UpdateStudentDto } from '../dto/update-student.dto';
export declare class StudentService {
    private studentModel;
    constructor(studentModel: Model<IStudent>);
    createStudent(createStudentDto: CreateStudentDto): Promise<IStudent>;
    updateStudent(studentId: string, updateStudentDto: UpdateStudentDto): Promise<IStudent>;
    getAllStudents(): Promise<IStudent[]>;
    getStudent(studentId: string): Promise<IStudent>;
    deleteStudent(studentId: string): Promise<IStudent>;
}
