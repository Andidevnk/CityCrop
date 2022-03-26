# CityCrop Mobile App

## Getting Started

First, open your terminal and install the expo-cli:

```bash
npm install --global expo-cli
```

Then start the application with:

```bash
expo start
```

## Create a new staging release

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

## Create a new production release

Increment app version:

```bash
yarn iav
```

Publish changes to default channel:

```bash
expo publish --release-channel default
```

Build binaries:

```bash
expo build:android --release-channel default
expo build:ios --release-channel default
```

Finally, upload the binaries to App and Play stores respectively.
