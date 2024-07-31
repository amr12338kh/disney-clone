import { TriangleAlert } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <section className="py-8 px-5 flex flex-col gap-4 min-h-[80vh] items-center justify-center text-primary">
      <div>
        <TriangleAlert size={100} />
      </div>
      <p className=" text-center text-xl sm:text-2xl">
        This page is coming soon! stay tuned.
      </p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </section>
  );
};

export default ComingSoon;
