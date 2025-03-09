export const sendContactForm = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
  
      if (!res.ok) {
        const errorData = await res.json(); 
        throw new Error(errorData.message || "Failed to send message");
      }
  
      return await res.json(); 
  
    } catch (e) {
      console.error("Error sending contact form:", e);
      return { success: false, message: e.message || "Something went wrong" };
    }
  };
  