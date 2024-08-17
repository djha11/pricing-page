import React from "react";
import "./Pricing.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#authentication">Authentication</a></li>
        <li><a href="#endpoints">Endpoints</a></li>
        <li><a href="#tutorial">Tutorial</a></li>
        <li><a href="#code-examples">Code Examples</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  );
};

const Pricing = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="pricing">
          <h2>API Pricing</h2>
          <p>
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
          <table>
            <thead>
              <tr>
                <th>API</th>
                <th>Model</th>
                <th>Price per 1K tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>GPT-4</td>
                <td>$0.03</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
              </tr>
            </tbody>
          </table>
          <h3>Token Estimation</h3>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words.
            For precise pricing, we recommend using our token calculator tool.
          </p>
          <h3>Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the
            book. The API tracks token usage and bills accordingly. Detailed
            usage reports are available in your account dashboard.
          </p>
        </section>
      </main>
    </>
  );
};

export default Pricing;
