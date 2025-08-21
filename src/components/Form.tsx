import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 4, margin: "auto" }}>
      <div style={{ padding: 8 }}>
        <label style={{ fontFamily: "sans-serif" }}>Namn:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div style={{ padding: 8 }}>
        <label style={{ fontFamily: "sans-serif" }}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "teal",
          borderColor: "teal",
          borderRadius: 5,
          padding: 8,
        }}
      >
        Spara
      </button>
    </form>
  );
}
