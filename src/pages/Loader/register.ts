import { json } from "react-router-dom";
import getEventId from "../../services/getEvents";
import getWallet from "../../services/getWallets";

async function register({ params }) {
  const id: string = params.id;
  const data = await getEventId(id);
  const [{ emailWallet }] = await getWallet(id);
  const length = emailWallet.length;
  console.log(length);

  if (!Array.isArray(data) || !data.length) {
    const info = { message: "Nothing found" };
    return json(info, { status: 400 });
  }
  data.push(length);
  console.log(data);
  
  return json(data, { status: 200 });
}

export default register;
