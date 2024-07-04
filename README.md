<h1>API testing using jest and supertest</h1>
<h3>Initailizing setup files for local testing</h3>
<p>
  Commands to run on vs code terminal :-
  <ul>
    <li>npm init -y</li>
    <li>npm install jest supertest ts-jest --save-dev</li>
    <li>npm install @types/jest @types/supertest --save</li>
  </ul>
</p>
<h3>Create the Git Action workflow</h3>
<p>
  Steps for creating Git Action Workflow includes :-
  <ul>
    <li>Create a repository of the folder on github.</li>
    <li>Under navbar of repository -> Click on "Actions"</li>
    <li>Select "Node.js" option under workflow</li>
    <li>"node.js.yml" file will be created to execute the test on git actions</li>
    <li>Run the Build and test the file</li>
  </ul>
</p>
<h3>Configure jenkins with Git Repository</h3>
<p>
  Steps to configure jenkins :-
  <ul>
    <li>Go to settings -> Select "developers settings" -> Choose "generate authority token" -> Save the GAT on notepad</li>
    <li>Install jenkins on the PC</li>
    <li>Open browser and type "localhost:8080" in the search bar</li>
    <li>Setup jenkins using Git Authority Token</li>
  </ul>
  Add project to jenkins :-
  <ul>
    <li>Click on create new item button -> Give a name -> click on OK</li>
    <li>Install essential plugins from configure section like nodejs, html publisher, junit-reporters</li>
    <li>Add the project using git section under configure section</li>
    <li>Configure Node js version</li>
    <li>Click on "Build Now"</li>
  </ul>
  Add html reporter and junit reporters to project :-
  <ul>
    <li>Go to project in jenkins</li>
    <li>Click on configure option in side panel</li>
    <li>Under general section click on "Post-build Actions"</li>
    <li>Select Publish HTML report and type the file directory</li>
    <li>Select juint report and type the file directory</li>
    <li>Click on "Apply" button</li>
    <li>Click on "Save" button</li>
  </ul>
</p>

<h4>*Note :- Here i have used my own database which is hosted on my local system using json-server on port no. 3000</h4>
