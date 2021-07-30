const axios = require('axios');
const SLACK_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // App: Mobile App | Channel: app-updates

const VERSIONS = {
  android:
    'https://expo.dev/@panagiotis.plytas/citycrop?release-channel=staging',
  ios: '3.0.10',
};
const UPDATES = {
  features: ['Show new dome screen when adding new plant'],
  fixes: [],
};

const formattedUpdates = {
  features: UPDATES.features.map((feature) => `• ${feature}\n`).join(''),
  fixes: UPDATES.fixes.map((fix) => `• ${fix}\n`).join(''),
};

const data = {
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Staging Release 🧪',
        emoji: true,
      },
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Testing',
        emoji: true,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Android link:* <${VERSIONS.android}|Expo QR Code>`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*iOS TestFlight version:* ${VERSIONS.ios}`,
      },
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Updates',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Features:*\n${
            formattedUpdates.features.length > 0
              ? formattedUpdates.features
              : '_No new fixes_'
          }`,
        },
        {
          type: 'mrkdwn',
          text: `*Fixes:*\n${
            formattedUpdates.fixes.length > 0
              ? formattedUpdates.fixes
              : '_No new fixes_'
          }`,
        },
      ],
    },
  ],
};

// console.log(JSON.stringify(data));
axios.post(SLACK_WEBHOOK_URL, data).catch((error) => console.log(error));
