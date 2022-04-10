import { Request, Response } from "express";
import { Todo } from '../model/todo';

// retorna todos
export const all = async( req: Request, res: Response)=>{
    const list = await Todo.findAll();
    res.json({
        list: list
    });
};
export const add = async(req: Request, res: Response)=>{
    console.log(req.body.title);
    if(req.body.title){
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({
            item: newTodo
        });
    }
    res.json({
        error:'dadosnão foi enviado'
    });
};
export const update = async()=>{}
export const remove = async()=>{}