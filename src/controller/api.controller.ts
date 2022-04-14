import { Request, Response } from "express";
import { Todo } from '../model/todo';

// retorna todos
export const all = async( req: Request, res: Response)=>{
    const list = await Todo.findAll();
    res.json({
        list: list
    });
};
export const add = async (req: Request, res: Response)=>{
    console.log(req.body);
    console.log(req.params);

    if(req.body.title){
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        res.status(201).json({
            item: newTodo
        });
        return;
    }
    res.json({
        error:'dados não foi enviado'
    });
};
export const update = async (req: Request, res: Response)=>{
    let id: string = req.params.id;
    console.log(id);
    let todo = await Todo.findByPk(id);
    if(todo){
        if(req.body.title){
            todo.title = req.body.title;
        }
        if(req.body.done){
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    todo.done = true;
                    break;
                case 'false':
                case '0':
                    todo.done = false;
                    break;
            }
        }
        await todo.save();
        res.json({
            item:todo
        });
    }else{
        res.json({
            error: 'Intem não foi encontrado'
        });
    }
}
export const remove = async(req: Request, res: Response)=>{
    let id: string = req.params.id;
    let todo = await Todo.findByPk(id);

    if(todo){
        await todo.destroy();
    }

    res.json({});
}