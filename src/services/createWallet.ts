import { TipLink } from "@tiplink/api";

function CreatLink() {
  const link = TipLink.create().then((tiplink) => {
    return tiplink;
  });
  return link;
}

export default CreatLink;
