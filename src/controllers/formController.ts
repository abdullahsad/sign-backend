import { Request, Response } from "express";
import Form from "../models/formModel";

export const getForms = async (req: Request, res: Response) => {
  const forms = await Form.find({ userId: (req as any).user._id });
  res.send(forms);
};

export const createForm = async (req: Request, res: Response) => {
  const form = new Form({});
  form.userId = (req as any).user._id;
  //check if req.body has a value for each field
  if (req.body.email) form.email = req.body.email;
  if (req.body.name) form.name = req.body.name;
  if (req.body.phone) form.phone = req.body.phone;
  //address
  if (req.body.address) form.address = req.body.address;
  if (req.body.city) form.city = req.body.city;
  if (req.body.state) form.state = req.body.state;
  if (req.body.zip) form.zip = req.body.zip;
  //insurance_claim
  if (req.body.insurance_claim) form.insurance_claim = req.body.insurance_claim;
  //company_list
  if (req.body.company_list) form.company_list = req.body.company_list;
  //insurance_details
  if (req.body.insurance_details)
    form.insurance_details = req.body.insurance_details;
  //is_signed
  await form.save();

  res.json(form);
};

export const updateForm = async (req: Request, res: Response) => {
  const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(form);
};

export const deleteForm = async (req: Request, res: Response) => {
  await Form.findByIdAndDelete(req.params.id);
  //   res.send("Form deleted");
  res.json({ message: "Form deleted" });
};
