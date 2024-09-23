import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import {Request,Response} from "express"
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller()
export class HelloController {
    @Get('/hello')
    @HttpCode(201)

    indexedDB(@Req() request:Request, @Res() response:Response){
        response.json({message:'Helota'})
    }
    @Get('/notfound')
    @HttpCode(404)
    notFoundPage(@Req() request:Request, @Res() response:Response){
        return '404 not found'
    }
    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe) num:number){
        return num + 14
    }
    @Get('active/:status')
    @UseGuards(AuthGuard)
    isUserActive(@Param('status', ParseBoolPipe) status:boolean){
        console.log( typeof status)
        return status
    }
    @Get('/greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name: string,age:number}){
        return `Hello ${query.name}, you are ${query.age + 30} years old`

    }
}