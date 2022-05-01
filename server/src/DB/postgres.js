import { Client } from "pg";


const client = new Client({
  user: "postgres",
  database: "nasa_project"
})

async function init() {
  try {
    await client.connect()
    console.log("DB Connected");
  } catch (error) {
    console.log(error)
  }
}


export default init;
