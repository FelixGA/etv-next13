import React, { useState } from "react";
import Modal from "../components/core/Modal";
import Form from "../components/repeated/Form";

export default function testPage() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full h-full pt-8 flex justify-center ">
      <Modal open={open} setOpen={setOpen}>
        <Form />
      </Modal>
    </div>
  );
}
