import database from "../../database/lista.json"

export default function(req, res) {
  res.send(database)
}
