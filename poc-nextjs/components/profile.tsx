import { getCurrentUser } from "@/lib/session";

export default async function Profile() {
  const user = await getCurrentUser();



  return <h1>Profile: {JSON.stringify(user, null, '\t')}</h1>;
}
