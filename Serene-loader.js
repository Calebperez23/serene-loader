export default async function SereneLoader({ mount, context }) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-top:20px; padding:16px; background:#0f1724;
    border:1px solid #2a3b52; border-radius:12px; color:#cfe3ff;
  `;

  container.innerHTML = `
    <h3>Welcome back, ${context.user} 👋</h3>
    <p>Serene has expanded. Your intent: <b>${context.intent}</b></p>
    <p>Last updated: ${new Date(context.lastUpdate).toLocaleString()}</p>
    <button id="clear">Clear Loader Override</button>
  `;

  mount.appendChild(container);

  document.getElementById('clear').onclick = () => {
    localStorage.removeItem("serene_loader");
    alert("Loader override cleared. Reload to use default.");
  };

  console.log("SereneLoader activated with context:", context);
}
