import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/userModel";

export default async function handler(req, res) {
  res.send("Done fetching user from api");
}
