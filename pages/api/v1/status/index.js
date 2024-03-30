import database from "infra/database.js";

async function status(request, response) {
  console.log("🍄 >>>>>>> database", database);
  /*  response.status(200).send("Vraaau LoL"); */
  /*  response.json({ status: "Vraaau LoL" }); */

  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log("🍄 >>>>>>> status >>>>>> result:", result.rows);

  response.status(200).json({ status: "Vraaau LoL" });
}

export default status;
