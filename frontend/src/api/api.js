// Backend ka base URL — production mein deploy karte waqt yeh badalna
const API_BASE_URL = "http://127.0.0.1:8000/api";

/**
 * Generic POST helper. Throws an error with backend's message if the
 * request fails, so the calling component can show it to the user.
 */
async function postData(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const firstError =
      Object.values(errorBody)[0]?.[0] || "Something went wrong. Please try again.";
    throw new Error(firstError);
  }

  return response.json();
}

export function submitEnrollment(data) {
  return postData("enrollment", data);
}

export function submitContactMessage(data) {
  return postData("contact", data);
}