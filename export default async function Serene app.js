export default async function Serene({ mount, log }) {
  const root = document.createElement('div');
  root.style.cssText = "max-width:720px;margin:16px auto;padding:16px;background:#101722;border:1px solid #243146;border-radius:14px;color:#e9f0f7";
  root.innerHTML = `<h2 style="margin:0 0 8px">Hello, I’m Serene ✨</h2>
    <p>Loaded from your server. This is the full experience shell — ready for features.</p>`;
  mount.appendChild(root);
  log?.("UI mounted.");
}
