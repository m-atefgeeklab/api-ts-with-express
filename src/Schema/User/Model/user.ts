import { model, Schema } from "mongoose";

const userModel = new Schema<IUser>({
  name: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  }
})

const User = model<IUser>('User', userModel);

export default User;
