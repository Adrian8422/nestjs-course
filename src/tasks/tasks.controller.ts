import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('tasks')

export class TaskController {
    taskService:TaskService
    constructor(taskService:TaskService){
        this.taskService = taskService

    }
   
    @Get()
    @ApiOperation({summary:'Get all tasks'})
    @ApiResponse({status:200, description: 'Return all tasks'})
    @ApiResponse({status:403, description: 'Forbidden'})
     getAllTasks(@Query() query:any){
        console.log(query);
        
        return this.taskService.getTasks()
        
     }
    @Get(':id')
    getTaskById(@Param('id') id:any){
        console.log(id);
        
       return this.taskService.getTaskById(id)
        
    }
    @Post()
    @ApiOperation({summary:'Create a task'})
    createTasks(@Body() task:CreateTaskDto){
   
        return this.taskService.createTask(task)
         
     }
    @Put(':id')
    updateTask(@Body() @Param('id') id:string, task: UpdateTaskDto){
        return this.taskService.updateTask(id,task)
         
     }
    @Delete()
    deleteTask(){
        return this.taskService.deleteTask()
         
     }

     @Patch()
     updateTaskStatus(){
         return this.taskService.updateTaskStatus()
          
      }
}