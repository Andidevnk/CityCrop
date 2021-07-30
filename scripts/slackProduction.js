const axios = require('axios');
const SLACK_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // App: Mobile App | Channel: app-updates

const VERSIONS = {
  android: '3.0.14',
  ios: '3.0.14',
};
const CHANGES = {
  features: [
    'New tray selector in module settings',
    'Added validation for email inputs',
    'Show a shake animation when input is invalid',
    'Minor UI improvements',
  ],
  fixes: ['Fix visibility of inputs when opening keyboard'],
};

const formattedChanges = {
  features: CHANGES.features.map((feature) => `• ${feature}\n`).join(''),
  fixes: CHANGES.fixes.map((fix) => `• ${fix}\n`).join(''),
};

const data = {
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🔈 Production Release',
        emoji: true,
      },
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Current versions',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Android:*\n${VERSIONS.android}`,
        },
        {
          type: 'mrkdwn',
          text: `*iOS:*\n${VERSIONS.ios}`,
        },
      ],
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: 'Changes',
        emoji: true,
      },
    },
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Features:*\n${
            formattedChanges.features.length > 0
              ? formattedChanges.features
              : '_No new fixes_'
          }`,
        },
        {
          type: 'mrkdwn',
          text: `*Fixes:*\n${
            formattedChanges.fixes.length > 0
              ? formattedChanges.fixes
              : '_No new fixes_'
          }`,
        },
      ],
    },
  ],
};

axios.post(SLACK_WEBHOOK_URL, data).catch((error) => console.log(error));
