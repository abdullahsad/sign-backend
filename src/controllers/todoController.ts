import { Request, Response } from "express";
import Todo from "../models/todoModel";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find({ userId: (req as any).user._id });
  res.send(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  const todo = new Todo({
    userId: (req as any).user._id,
    text: req.body.text,
  });
  await todo.save();
  res.send(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send("Todo deleted");
};
