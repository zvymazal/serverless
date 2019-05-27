<!--
title: Serverless - Infrastructure & Compute Providers
menuText: Providers
layout: Doc
-->

<!-- DOCS-SITE-LINK:START automatically generated  -->
### [Read this on the main serverless docs site](https://www.serverless.com/framework/docs/providers/)
<!-- DOCS-SITE-LINK:END -->

# Choose your compute provider

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
<br/>
<br/>

# Connecting your provider

To deploy functions, specify your provider in your service's `serverless.yml` file under the `provider` key and make sure your provider credentials are setup on your machine or CI/CD system.

```yml
# serverless.yml
service: my-service-name

provider:
  name: aws
```
