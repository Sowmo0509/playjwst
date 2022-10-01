import connectMongo from "../../utils/connectMongo";
import User from "../../models/userModel";

export default async function handler(req, res) {
  console.log("Connecting to DB...");
  await connectMongo();
  console.log("Connected!");

  console.log("Creating document...");
  //   const user = await User.create({ username: "Cow", point: 123 });
  try {
    await User.create(req.body);
  } catch (error) {
    if (error.code == "11000") {
      res.status(200).send({ errorMsg: "Same username found. Please change username." });
    } else {
      res.status(200).send({ successMsg: "User added." });
    }
  }
  console.log("Created!");
  res.status(200).send("CREATED NEW PLAYER PROFILE");
}
