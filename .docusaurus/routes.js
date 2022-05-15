
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','fe0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f42'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','bed'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','de9'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','3f2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','548'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','d5a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','7f3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','547'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','2e4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','b82'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','6d0'),
    exact: true
  },
  {
    path: '/docs/tags/aws',
    component: ComponentCreator('/docs/tags/aws','f70'),
    exact: true
  },
  {
    path: '/docs/tags/cloudfront',
    component: ComponentCreator('/docs/tags/cloudfront','115'),
    exact: true
  },
  {
    path: '/docs/tags/hosting',
    component: ComponentCreator('/docs/tags/hosting','b0b'),
    exact: true
  },
  {
    path: '/docs/tags/s-3',
    component: ComponentCreator('/docs/tags/s-3','e08'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','2ee'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects','853'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','760'),
    routes: [
      {
        path: '/docs/api/intro',
        component: ComponentCreator('/docs/api/intro','0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ci-cd/github/pipeline-setup',
        component: ComponentCreator('/docs/ci-cd/github/pipeline-setup','5f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ci-cd/gitlab/pipeline-setup',
        component: ComponentCreator('/docs/ci-cd/gitlab/pipeline-setup','431'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ci-cd/intro',
        component: ComponentCreator('/docs/ci-cd/intro','1f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/debugging/intro',
        component: ComponentCreator('/docs/debugging/intro','699'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/debugging/python/ipdb',
        component: ComponentCreator('/docs/debugging/python/ipdb','9ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/debugging/python/vscode',
        component: ComponentCreator('/docs/debugging/python/vscode','6a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/debugging/react/tip-and-tricks',
        component: ComponentCreator('/docs/debugging/react/tip-and-tricks','2aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/debugging/react/vscode',
        component: ComponentCreator('/docs/debugging/react/vscode','21a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/intro',
        component: ComponentCreator('/docs/docusaurus/intro','f64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/congratulations','710'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-blog-post','61f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-document','800'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-page','4b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/deploy-your-site','eaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docusaurus/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/docusaurus/tutorial-basics/markdown-features','08c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/git/commands',
        component: ComponentCreator('/docs/git/commands','509'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hosting/',
        component: ComponentCreator('/docs/hosting/','838'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hosting/amazon/hosting',
        component: ComponentCreator('/docs/hosting/amazon/hosting','791'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hosting/google/firebase',
        component: ComponentCreator('/docs/hosting/google/firebase','e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hosting/microsoft/azure',
        component: ComponentCreator('/docs/hosting/microsoft/azure','512'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/learning/learning',
        component: ComponentCreator('/docs/learning/learning','5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/',
        component: ComponentCreator('/docs/testing/','b64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/integration',
        component: ComponentCreator('/docs/testing/integration','716'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/python/selenium',
        component: ComponentCreator('/docs/testing/python/selenium','214'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/python/setup',
        component: ComponentCreator('/docs/testing/python/setup','218'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/react/msw/setup',
        component: ComponentCreator('/docs/testing/react/msw/setup','c9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/testing/unit-testing',
        component: ComponentCreator('/docs/testing/unit-testing','3d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','ab9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
