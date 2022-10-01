import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";

export default async function handler(req, res) {
  console.log("Connecting to DB...");
  await connectMongo();
  console.log("Connected!");

const user = await User.find();
console.log(user);

  // res.status(200).json({ user });
  res.send("Done fetching user from api");
}
