import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
    private tasks = []
    getTasks(){
        return this.tasks
    }
    getTaskById(id:string){
      const taskFound = this.tasks.find(task=>task.id == id)
      if(!taskFound)
      return new NotFoundException(`Task with id ${id} not found`)
    }
    createTask(task:CreateTaskDto){
        this.tasks.push({...task,id:this.tasks.length + 1})

        return this.tasks
    }
    updateTask(id:string, task:UpdateTaskDto){
        const findTask = this.getTaskById(id)
        
        
    }
    deleteTask(){
        return 'Eliminando tarea'
    }
    updateTaskStatus(){
        return 'Actualizando el estado de una tarea'
    }
}

