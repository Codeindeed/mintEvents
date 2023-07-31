import { json } from "react-router-dom";
import getUserEvents from "../../services/getUserEvents";

async function loader({ params }) {
  const data = await getUserEvents(params.wallet);
  return json(data, { status: 200 });
}

export default loader;
