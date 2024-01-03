
import Container from "@/components/Container";
import SupportComponent from "@/components/supportComponent";
import React from "react";
const page = async () => {
  return (
    <Container>
      <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
        <h2 className="font-bold text-2xl">Contact</h2>
        <p>Get the wireless components you want</p>
      </div>

      <SupportComponent />

    </Container>
  );
};

export default page;
