import { auth } from "@/auth";
import FormNewBoard from "@/components/FormNewBoard";
import LogoutButton from "@/components/LogoutButton";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";
import CheckoutButton from "@/components/CheckoutButton";
import PortalButton from "@/components/PortalButton";

const getUser = async () => {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
};

export default async function Dashboard() {
  const user = await getUser();
  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto flex justify-between py-3 px-5">
          {user.hasAccess ? <PortalButton /> : <CheckoutButton />}
          <LogoutButton />
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-5xl mx-auto py-12 px-5 space-y-12">
        <FormNewBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} boards
          </h1>
          <ul className="space-y-4">
            {user.boards.map((board) => (
              <li key={board._id}>
                <Link
                  className="bg-base-100 p-6 rounded-3xl block hover:bg-neutral hover:text-neutral-content duration-100"
                  href={`/dashboard/board/${board._id}`}
                >
                  {board.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
