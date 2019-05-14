<!--
title: Serverless Getting Started Guide
menuText: Getting Started
layout: Doc
menuOrder: 0
menuItems:
  - {menuText: AWS Guide, path: /framework/docs/providers/aws/guide/quick-start}
  - {menuText: Azure Functions Guide, path: /framework/docs/providers/azure/guide/quick-start}
  - {menuText: Apache OpenWhisk Guide, path: /framework/docs/providers/openwhisk/guide/quick-start}
  - {menuText: Google Functions Guide, path: /framework/docs/providers/google/guide/quick-start}
  - {menuText: Kubeless Guide, path: /framework/docs/providers/kubeless/guide/quick-start}
  - {menuText: Spotinst Guide, path: /framework/docs/providers/spotinst/guide/quick-start}
  - {menuText: Fn Guide, path: /framework/docs/providers/fn/guide/quick-start}
  - {menuText: Cloudflare Workers Guide, path: /framework/docs/providers/cloudflare/guide/quick-start}
-->

# Getting Started with Serverless Open Source

First things first, let's get the Serverless framework installed on your machine.

```bash
# Installing the serverless cli
npm install -g serverless
# Updating serverless from a previous version of serverless
npm update -g serverless
```

Next up, it's time to choose where you'd like your serverless service to run.

## Choose your compute provider

Under the hood, the serverless framework is deploying your code to a cloud provider like AWS, Microsoft Azure, Apache OpenWhisk or Google Cloud functions.

<div class="providersSections">
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./aws/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/aws-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./azure/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/azure-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./openwhisk/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/openwhisk-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./google/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/google-logo.png" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./kubeless/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/kubeless-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./spotinst/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/spotinst-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./fn/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/fn-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>
  <div class="providerSection">
    <div class="providerSectionHeader">
      <a href="./cloudflare/">
        <img src="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/cloudflare-logo.svg" width="250" draggable="false"/>
      </a>
    </div>
  </div>

</div>
