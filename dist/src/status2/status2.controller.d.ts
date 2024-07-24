import { Status2Service } from './status2.service';
import { UpdateStatus2Dto } from './dto/update-status2.dto';
export declare class Status2Controller {
    private readonly status2Service;
    constructor(status2Service: Status2Service);
    create(createStatus2Dto: any): Promise<{
        status_id: number;
        description: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStatus2Dto: UpdateStatus2Dto): string;
    remove(id: string): string;
}
