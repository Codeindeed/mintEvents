import { json, redirect } from "react-router-dom";
import getEventId from "../../services/getEvents";

async function getEvent({ request }: any) {
  const forms = await request.formData();
  const id: string = forms.get("input");
  console.log(id);

  if (!id) {
    const info = { message: "No Id input is Empty" };
    return json(info, { status: 400 });
  }
  const data = await getEventId(id);
  if (!Array.isArray(data) || !data.length) {
    const info = { message: "Nothing found" };
    console.log(info);
    return json(info, { status: 400 });
  }
  return redirect(`/register/${id}`);
}

export default getEvent;
