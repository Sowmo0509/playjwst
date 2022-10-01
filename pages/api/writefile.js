// const fs = require("fs");

// export default async function handler(req, res) {
//   const jsonFile = [JSON.stringify(req.body)];
//   const file = `const leaderboard = [${JSON.stringify(req.body)}]; export default leaderboard;`;
//   if (req.method === "POST") {
//     fs.writeFileSync("./pages/data/leaderboard.js", file);
//     return res.status(200).json({});
//   }
// }
