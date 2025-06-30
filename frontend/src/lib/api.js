// Simple API utility for backend requests
const BASE_URL = "https://ak-gaming-hub-3.onrender.com/api"; // 👈 Update to your live backend URL

export async function postData(endpoint, data) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || "Something went wrong");
    return json;
  } catch (err) {
    throw err;
  }
}
