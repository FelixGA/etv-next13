import React from "react";
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2> Zum Newsletter anmelden</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisi vel consectetur euismod, nisi nisl euismod nisi, vel consectetur
        nisi nisl euismod.
      </p>
      <div>
        <label forHtml="email">email</label>
        <input type="email" placeholder="e-mail" /> <button>anmelden</button>
      </div>
    </div>
  );
};
export default Newsletter;
