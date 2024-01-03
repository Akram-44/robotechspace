import Container from "@/components/Container";
import React from "react";

const page = async () => {
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2>Contact</h2>
        <p>Get the wireless components you want</p>
      </div>
      <p className="mt-4 text-zinc-500 font-semibold">
        Showing all  results
      </p>
    </Container>
  );
};

export default page;
