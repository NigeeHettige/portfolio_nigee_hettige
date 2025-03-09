import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = req.body;
    // console.log(data);
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        from: data.email,
        subject: "Portfolio Contact Form",
        text: `Message from ${data.name} (${data.email}): ${data.message}`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background: #f9f9f9; border: 1px solid #ddd;">
  <h2 style="color: #333; text-align: center;">📩 New Message from <span style="color: #007bff;">${data.name}</span></h2>
  
  <div style="background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
    <p style="color: #555; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">${data.email}</a></p>
    <p style="color: #555; font-size: 16px;"><strong>Message:</strong></p>
    <blockquote style="background: #f1f1f1; padding: 10px; border-left: 5px solid #007bff; font-style: italic; color: #333; border-radius: 5px;">
      ${data.message}
    </blockquote>
  </div>

  <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
    📬 You received this message from your portfolio contact form.
  </p>
</div>
`,
      });
      return res.status(200).json({ success: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: "Bad request" });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
