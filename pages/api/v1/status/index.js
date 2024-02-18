function status(request, response) {
  /*  response.status(200).send("Vraaau LoL"); */

  response.json({ status: "Vraaau LoL" });
}

export default status;
