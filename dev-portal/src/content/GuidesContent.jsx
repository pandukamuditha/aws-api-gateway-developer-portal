import React from 'react'

export function AboutPage (props) {
  return (
    <div>
      <p>Welcome to Neem's API documentation.</p>
      <p>This section contains guides on basic developer resources required to interact with our APIs as well as instructions for executing different use cases.</p>
      <p>We're just getting started on guides and there's more to come!</p>
    </div>
  )
}

export function Quickstart (props) {
  return (
    <div class="page-content">
      <p>Welcome to our Quickstart guide. This section will walk you through the different steps that you are required to complete before you can get started with NEEM APis.</p>
      <ol>
        <li>Creating a Developer Sandbox account </li>
        <li>Creating API keys </li>
        <li>Using the API key to interact with APIs </li>
      </ol>
      <h2>01. Create a Developer Sandbox Account</h2>
      <p>The first step in the Quickstart workflow is creating a free developer sandbox account. Navigate to the signup page, fill in the form, and click on signup. The Neem team will then review your details prior to approving your application.</p>
      <p>The developer sandbox allows you to create and manage API keys. It's primarily designed to allow you to safely test APIs without worrying about interfering with production data</p>
      <div class="mb-4">
        <img class="flow" src="images/quickstart01.png" />
      </div>
      <h2>02. Create a API key</h2>
      <p>Before making requests to the NEEM APIs, you will need to generate an API key. These keys are necessary to authenticate each request. You'll find that executing an API without an API key will not work.  </p>
      <p>To create your key, login to the developer sandbox, navigate to your dashboard, click on "Create API Key popup button" and click confirm. You'll then see your API key generated within the dashboard.  </p>
      <div class="mb-4">
        <img class="flow" src="images/quickstart02.png" />
      </div>
      <h2>03. Test an API using the generated Key</h2>
      <p>To make sure everything is working as expected, you can navigate to an API, within the API reference section page, select on 'Authorize' displayed at the top right side of your page, enter your API key, click on confirm, and then proceed to execute an API.  </p>
      <p>Note: You will be required to authorize your API key every time you move from one page to another. </p>
      <div class="mb-4">
        <img class="flow" src="images/quickstart03.png" />
      </div>
    </div>
  )
}
