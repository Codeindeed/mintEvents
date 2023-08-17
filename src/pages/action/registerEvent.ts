import { json, redirect } from "react-router-dom";
import CreatLink from "../../services/createWallet";
import getUpdateEvent from "../../services/subscribe";

async function subscribeEvent({ request, params }: any) {
  const form = await request.formData();
  const getEmail = form.get("mail");
  const validate =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!getEmail.match(validate)) {
    return json({ message: "invalid  Email address" }, { status: 400 });
  }
  const link = await CreatLink();
  const id = await getUpdateEvent(
    params.id,
    link.url.toString(),
    link.keypair.publicKey.toBase58(),
    getEmail
  );
  if (!id) {
    return json({ message: null }, { status: 400 });
  }
  return redirect("/");
}

export default subscribeEvent;
