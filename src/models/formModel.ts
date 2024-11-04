import mongoose, { Document, Schema } from "mongoose";

export interface IForm extends Document {
  userId: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  insurance_claim: boolean;
  company_list: string[] | null;
  insurance_details: {
    insurance_code: string | null;
    claim_number: string | null;
    agent_name: string | null;
    agent_phone: string | null;
    agent_email: string | null;
    adjuster_name: string | null;
    adjuster_phone: string | null;
    adjuster_email: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    phone: string | null;
    email: string | null;
  } | null;
  is_signed: boolean;
}

// const todoSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
//   text: { type: String, required: true },
//   completed: { type: Boolean, default: false },
// });

const formSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  insurance_claim: { type: Boolean, required: true, default: false },
  company_list: { type: [String], default: null },
  insurance_details: {
    type: {
      insurance_code: { type: String, default: null },
      claim_number: { type: String, default: null },
      agent_name: { type: String, default: null },
      agent_phone: { type: String, default: null },
      agent_email: { type: String, default: null },
      adjuster_name: { type: String, default: null },
      adjuster_phone: { type: String, default: null },
      adjuster_email: { type: String, default: null },
      address: { type: String, default: null },
      city: { type: String, default: null },
      state: { type: String, default: null },
      zip: { type: String, default: null },
      phone: { type: String, default: null },
      email: { type: String, default: null },
    },
    default: null,
  },
  is_signed: { type: Boolean, required: true, default: false },
});

export default mongoose.model<IForm>("Form", formSchema);
