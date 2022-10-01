import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";

export default async function userList(req, res) {
  console.log("Connecting to DB...");
  await connectMongo();
  console.log("Connected!");

  const user = await User.find();
  // console.log(user);

  res.json({ user });
  res.send("Done fetching user from api");
}
