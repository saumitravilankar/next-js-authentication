import { AuthOption } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const ServerComponent = async () => {
  const session = await getServerSession(AuthOption);
  return <div>{JSON.stringify(session?.user)}</div>;
};

export default ServerComponent;
