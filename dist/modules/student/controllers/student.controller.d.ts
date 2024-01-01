import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { StudentService } from '../services/student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(response: any, createStudentDto: CreateStudentDto): Promise<any>;
    updateStudent(response: any, studentId: string, updateStudentDto: UpdateStudentDto): Promise<any>;
    getStudents(response: any): Promise<any>;
    getStudent(response: any, studentId: string): Promise<any>;
    deleteStudent(response: any, studentId: string): Promise<any>;
}
