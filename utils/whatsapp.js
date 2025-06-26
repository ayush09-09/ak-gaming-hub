// This is a placeholder for WhatsApp notification integration using Meta API.
// You need to set your Meta API credentials and phone numbers to enable real notifications.

const axios = require('axios');

async function sendWhatsAppNotification(to, message) {
  // Replace with your Meta API credentials and endpoint
  const accessToken = 'YOUR_META_API_ACCESS_TOKEN';
  const phoneNumberId = 'YOUR_PHONE_NUMBER_ID';
  const url = `https://graph.facebook.com/v19.0/${phoneNumberId}/messages`;

  try {
    await axios.post(url, {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: message }
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('WhatsApp notification sent!');
  } catch (err) {
    console.error('WhatsApp notification failed:', err.message);
  }
}

module.exports = sendWhatsAppNotification;
