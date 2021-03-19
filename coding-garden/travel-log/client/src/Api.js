const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:1337"
    : "https://travel-log-api.now.sh";

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}
