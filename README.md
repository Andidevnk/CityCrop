Create release in staging channel with new version

```bash
expo publish --release-channel staging
```

For Android: We use the new QR code from Expo.

For iOS: We run the following command to generate the binary we will upload to TestFlight.

Creates binary for Transporter using latest version from staging channel

```bash
expo build:ios --release-channel staging --no-publish
```
