/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
const Twilio = require('twilio');

const config = require('dotenv').config();
const nameGenerator = require('../name_generator');

const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const SyncGrant = AccessToken.SyncGrant;

@Injectable()
export class AppService {
  getToken(identity: string) {
    const token = new AccessToken(
      config.parsed.TWILIO_ACCOUNT_SID,
      config.parsed.TWILIO_API_KEY,
      config.parsed.TWILIO_API_SECRET,
    );

    token.identity = identity || nameGenerator();

    if (config.TWILIO_CHAT_SERVICE_SID) {
      const chatGrant = new ChatGrant({
        serviceSid: config.TWILIO_CHAT_SERVICE_SID,
      });
      token.addGrant(chatGrant);
    }

    if (config.TWILIO_SYNC_SERVICE_SID) {
      const syncGrant = new SyncGrant({
        serviceSid: config.TWILIO_SYNC_SERVICE_SID || 'default',
      });
      token.addGrant(syncGrant);
    }

    return {
      identity: token.identity,
      token: token.toJwt(),
    };
  }
}
