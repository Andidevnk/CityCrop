const axios = require('axios');

const SLACK_MAIN_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // Channel: app-updates
const SLACK_TEST_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // Channel: Panos
const SLACK_WEBHOOK_URL =
  process.argv[2] === '--main'
    ? SLACK_MAIN_WEBHOOK_URL
    : SLACK_TEST_WEBHOOK_URL;

const DATA = {
  changes: [
    'Added new Feedback screen and prompt users to give feedback in popups.',
  ],
  androidVersion: '3.0.15',
  iosVersion: '3.0.15',
};
DATA.formattedChanges = DATA.changes.map((change) => `• ${change}\n`).join('');

const data = {
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🚀  Production Release',
        emoji: true,
      },
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '-------------- Changes --------------',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          DATA.formattedChanges.length > 0
            ? DATA.formattedChanges
            : '_No new changes_',
      },
    },
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '----------- New Versions -----------',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Android:* ${DATA.androidVersion}`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*iOS:* ${DATA.iosVersion}`,
      },
    },
  ],
};

axios.post(SLACK_WEBHOOK_URL, data).catch((error) => console.log(error));
