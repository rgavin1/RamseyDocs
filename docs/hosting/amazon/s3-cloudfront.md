---
slug: hosting
title: Deploy a React-based single-page application to Amazon S3 and CloudFront
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [hosting, aws, s3, cloudfront]
---

# Deploy a React-based single-page application to Amazon S3 and CloudFront 

:::tip Youtube Resource
[How to Deploy React App on AWS S3 and CloudFront [UPDATED 2021]](https://www.youtube.com/watch?v=CQ8vzm1kYkM)
:::

:::info Amazon's documentation on hosting
[Deploy a React-based single-page application to Amazon S3 and CloudFront ](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html)
:::


## Cloudfront

Amazon CloudFront is a web service that helps users access static files (.html, .css, .js, and image files) much quicker. Instead of storing files in a single location those files are copied and distributed across multiple ***edge locations*** or ***points of presence (POPs)***.  

![](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/images/how-you-configure-cf.png)

## Simple Storage Service (S3)

Amazon's Simple Storage Service, or S3, is a web service used to store all of our HTML, CSS, javascript, images, and JSON files called objects into buckets. 

:::info Documentation
[How Amazon S3 works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html#CoreConcepts)
:::


![](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/images/pattern-img/970a9d13-e8a2-44ac-aca5-a066e4be60e8/images/a70cd957-0a03-40f8-aa63-1e4e28d82c9c.png)

## Steps to connect to host a React application on AWS Cloud?

### Step 1: Create an Amazon S3 bucket
- Under the Buckets tab, click the Create bucket button.
- In the General configuration card, add a unqiue name to the Bucket name input.
- Leave all others as default 
- Click the Create bucket button at the bottom of the page

### Step 2: Create an Amazon CloudFront Distribution
- Under the CloudFront tab, click the Create distribution button.
- In the Origin card, add a unqiue name to the Origin domain input.
- Under the S3 bucket access section, select Yes use OAI (bucket can restrict access to only CloudFront).
- Under Origin access identity, create a new OAI.
- The Create new OAI modal will open and click Create
- Under Bucket policy make sure to Yes, update the bucket policy
- Under Viewer protocol policy, choose Redirect HTTP to HTTPS
- Under the Default root object - optional, input index.html
- Click the Create distribution button.

### Step 3: Confirm Website is deployed
- Wait for distribution to be deployed 
- Under the Distributions dashboard, copy and paste the value under the Domain name column into a new browser.
- Should be visiable