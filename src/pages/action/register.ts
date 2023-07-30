import { json, redirect } from "react-router-dom";
import getEventId from "../../services/getEvents";

async function getEvent({ request }) {
  const forms = await request.formData();
  const id: string = forms.get("input");
  console.log(id);

  if (!id) {
    console.log(id);
    throw Error("no id input empty");
  }
  const data = await getEventId(id);
  if (!Array.isArray(data) || !data.length) {
    const info = { message: "Nothing found" };
    console.log(info);
    return json(info, { status: 400 });
  }
  return redirect(`register/${id}`);
}

export default getEvent;
