// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
export const TWILIO_API_KEY = process.env.TWILIO_API_KEY;
export const TWILIO_API_SECRET = process.env.TWILIO_API_SECRET;
export const TWILIO_CHAT_SERVICE_SID = process.env.TWILIO_CHAT_SERVICE_SID;
export const TWILIO_NOTIFICATION_SERVICE_SID =
  process.env.TWILIO_NOTIFICATION_SERVICE_SID;
export const TWILIO_SYNC_SERVICE_SID =
  process.env.TWILIO_SYNC_SERVICE_SID || 'default';
