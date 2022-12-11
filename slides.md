---
theme: academic
class: text-white
colorSchema: dark
coverAuthor: Alexander Eble
coverAuthorUrl: https://alexeble.de
coverBackgroundUrl: https://images.unsplash.com/photo-1607799279861-4dd421887fb3
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: https://unsplash.com/photos/8qEB0fTe9Vw
coverDate: 12/01/2022
exportFilename: dev-environment-as-code
favicon: https://alexeble.mo.cloudinary.net/logo.png
fonts:
  local: Monserrat, Roboto Mono
hideInToc: true
info: |
  <h2>Dev Environment as Code</h2>
  <h5 class="font-light">Alexander Eble</h5>

  <a href="https://www.alexeble.de" target="_blank" rel="noreferrer"><img alt="Alexander Eble Logo" class="w-48px" src="https://alexeble.mo.cloudinary.net/logo.png"></a>

  The presentation is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA</a>.

  <ul>
    <li>
      <a href="https://www.alexeble.de/impressum/" target="_blank">Legal information of this website</a>
    </li>
    <li>
      <a href="https://www.alexeble.de/datenschutz/" target="_blank">Privacy policy of this website</a>
    </li>
  </ul>
lineNumbers: true
titleTemplate: '%s • Alexander Eble'
---

# Dev Environment as Code

Tech Talk @ artiso

---
hideInToc: true
layout: table-of-contents
---

# Agenda

---

# Introduction

Imagine 3 projects with following dev environment setup instructions. Which one do you prefer?

<div class="font-mono grid grid-cols-3 gap-4">
  <div class="bg-gray-500/50 px-3 py-2 rounded w-full" v-click>
    <h4>Setup</h4>
    <p class="text-center">404</p>
  </div>
  <div class="bg-gray-500/50 px-3 py-2 rounded w-full" v-click>
    <h4>Setup</h4>
    <div class="bg-gray-500/50 mb-2 mt-4 p-2 rounded w-50"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 mt-4 rounded p-2 w-50"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 mt-4 rounded p-2 w-50"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 mt-4 rounded p-2 w-50"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
    <div class="bg-gray-500/50 mb-2 rounded p-2 w-full"></div>
  </div>
  <div class="bg-gray-500/50 rounded px-3 py-2 w-full" v-click>
    <h4>Setup</h4>
    <p class="mt-4 text-sm">Start the Dev Environment which ships with the repository.</p>
  </div>
</div>

---

# Dev Containers

> A Development Container (or Dev Container for short) allows you to use a container as a full-featured development environment. The Development Containers Specification seeks to find ways to enrich existing formats with common development specific settings, tools, and configuration [..] so that they can be used as coding environments or for continuous integration and testing.<sup>1</sup>

<div class="mt-8">
  <ul>
    <li v-click><q>container</q> <logos-docker-icon /></li>
    <li v-click><q>full-featured</q></li>
    <li v-click><q>specification</q></li>
    <li v-click><q>enrich existing formats</q></li>
    <li v-click><q>as coding environments or for continuous integration and testing</q></li>
  </ul>
</div>

<Footnotes separator>
  <Footnote number=1><a href="https://containers.dev/" rel="noopener noreferrer">Microsoft</a></Footnote>
</Footnotes>

---
layout: figure
figureCaption: Delimitation Containers in Development and Production
figureFootnoteNumber: 1
figureUrl: https://containers.dev/img/dev-container-stages.png
---

<Footnotes separator>
  <Footnote number=1><a href="https://containers.dev/img/dev-container-stages.png" rel="noopener noreferrer">Microsoft</a></Footnote>
</Footnotes>

---

# Motivation

Dev Containers facilitate

<ul class="ml-6">
  <li>documentation</li>
  <li>setup</li>
  <li>sharing</li>
  <li>compatibility</li>
  <li>encapsulation</li>
  <li>prototyping</li>
  <li>device independency</li>
  <li>Continuous Integration</li>
</ul>

---
layout: center
class: text-center
---

# Prerequisites

[Docker](https://www.docker.com/) · [VS Code](https://code.visualstudio.com/) · [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

---

# Simple Dev Container

[.devcontainer.json or .devcontainer/devcontainer.json](https://containers.dev/implementors/json_reference/)

```json {2|3|4-14|15|16}
{
  "name": "dev-environment-as-code",
  "image": "node",
  "customizations": {
    "vscode": {
      "extensions": [
        "antfu.slidev",
        "editorconfig.editorconfig",
      ],
      "settings": {
        "editor.formatOnSave": true
      }
    }
  },
  "forwardPorts": [3030],
  "postStartCommand": "npm install && npm run dev",
}
```

---
layout: figure
figureCaption: Open with Dev Containers Extension
figureUrl: /command-palette.png
---

---

# Advanced Dev Container

Image customization

```json
{
  "build": {
    "dockerfile": "Dockerfile",
  },
}
```

Container orchestration

```json
{
  "dockerComposeFile": "docker-compose.yml",
  "service": "server",
  "workspaceFolder": "/usr/src/server"
}
```

<div class="mt-6">
  <p>
    <mdi-arrow-right /> <a href="https://github.com/alexanderdavide/dev-environment-as-code/tree/master/app" rel="noopener noreferrer">Example</a>
    with server, database and VS Code customization
  </p>
</div>

---

# Disadvantages and Limitations

Dev Containers

<ul class="ml-6">
  <li>might have lower performance</li>
  <li>consume a lot of storage for images</li>
  <li>utilize a lot of network bandwith to load images</li>
  <li>might cause projects to loose Host OS compatibility</li>
  <li>might be technically impractical or impossible for certain projects</li>
</ul>

---

# Outlook

<ul>
  <li><a href="https://github.com/codespaces" rel="noopener noreferrer">GitHub Codespaces</a></li>
  <li><a href="https://github.com/recode-sh/cli" rel="noopener noreferrer">recode</a></li>
  <li><a href="https://www.gitpod.io/" rel="noopener noreferrer">GitPod</a>, <a href="https://stackblitz.com/" rel="noopener noreferrer">StackBlitz</a> etc.</li>
  <li><a href="https://devenv.sh/" rel="noopener noreferrer">devenv</a></li>
</ul>
