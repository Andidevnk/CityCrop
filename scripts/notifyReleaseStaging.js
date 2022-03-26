const axios = require('axios');

// Change message data here
const DATA = {
  changes: [
    'Added support for online/offline device and module images (Mocked for now)',
  ],
  expoUrl:
    'https://expo.dev/@panagiotis.plytas/citycrop?release-channel=staging',
  iosTestFlightVersion: '3.0.15',
};
DATA.formattedChanges = DATA.changes.map((change) => `• ${change}\n`).join('');

// Constants
const SLACK_MAIN_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // Channel: app-updates
const SLACK_TEST_WEBHOOK_URL =
  'https://hooks.slack.com/services/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'; // Channel: Panos
const OTA_TESTING_ΤΕΧΤ = `Over-the-air update on version ${DATA.iosTestFlightVersion}.\nSimply open the app and the update will be\ndownloaded in the background, after a few\nseconds close the app and reopen it.\nThe update should now be applied.`;
const NEW_VERSION_TESTING_TEXT = `Download version ${DATA.iosTestFlightVersion} from TestFlight.`;
const ARGS_MAPPING = {
  '--app-updates': SLACK_MAIN_WEBHOOK_URL,
  '--panos': SLACK_TEST_WEBHOOK_URL,
  '--ios-ota': OTA_TESTING_ΤΕΧΤ,
  '--ios-new-version': NEW_VERSION_TESTING_TEXT,
};
const SLACK_WEBHOOK_URL = ARGS_MAPPING[process.argv[2]];
const IOS_TESTING_TEXT = ARGS_MAPPING[process.argv[3]];

const data = {
  blocks: [
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: '🧪  New Staging Release',
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
        text: '-------------- Testing ---------------',
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*On Android*\nDownload the Expo Go app and scan the\nQR code in <${DATA.expoUrl}|this link>.`,
      },
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*On iOS*\n${IOS_TESTING_TEXT}`,
      },
    },
  ],
};

// console.log(JSON.stringify(data));
axios.post(SLACK_WEBHOOK_URL, data).catch((error) => console.log(error));
