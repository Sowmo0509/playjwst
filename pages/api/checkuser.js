import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";

export default async function userList(req, res) {
  console.log("Connecting to DB...");
  await connectMongo();
  console.log("Connected!");

  const user = await User.findOne({ username: req.body.username });
  // console.log(user);

  res.json({ user });
  res.send("Done checking userfindone from api");
}
