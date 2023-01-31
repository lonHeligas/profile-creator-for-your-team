function htmlTemplate(data, teamName) {
  // * console.log(data);
  // * console.log(teamRoster);

  teamHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>team one</title>
    <link
    href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
  <header class="titlebar">
<h1>${teamName}</h1>
</header>
<section class="layout">
<div class="card">
  <div class="container">
    <h2 id="name">${data[0].getName()}</h2>
    <h2>👓 Manager</h2>
    </div>
  <div class="bottom-container">
    <div class="info-card">
      <h3>ID: ${data[0].getID()}</h3>      
      <h4>Email: <a href="mailto:${
        data[0].getEmail
      }" target="_blank">${data[0].getEmail()}</a></h4>
      <h3>Office number: ${data[0].getOfficeNumber()}</h3>
    </div>
  </div>
</div>`;

  // * console.log(teamHTML);

  // removes the manager from the data array to build out the remainder of the array in html
  const dataCropped = data.slice(1);

  // * console.log(dataCropped)

  dataCropped.forEach((element) => {
    if (element.role === "engineer") {
      teamHTML += `
<div class="card">
  <div class="container">
    <h2 id="name">${element.getName()}</h2>
    <h2>⚙ Engineer</h2>
  </div>
  <div class="bottom-container">
      <div class="info-card">
        <h3>ID: ${element.getID()}</h3>
        <h4>Email: <a href="mailto:${
          element.getEmail
        }" target="_blank">${element.getEmail()}</a></h4>
        <h3>GitHub: <a href="https://github.com/${element.getGithub()}" target="_blank">${element.getGithub()}</a></h3>
      </div>
  </div>
</div>

`; // * console.log(teamHTML);
      // * console.log(`additionalHTML = ${additionalHTML}`);
    } else {
      teamHTML += `
<div class="card">
  <div class="container">
    <h2 id="name">${element.getName()}</h2>
    <h2>🎓 Intern</h2>
  </div>
  <div class="bottom-container">
    <div class="info-card">
      <h3>ID: ${element.getID()}</h3>
      <h4>Email: <a href="mailto:${
        element.getEmail
      }" target="_blank">${element.getEmail()}</a></h4>
      <h3>School: ${element.getSchool()}</h3>
    </div>
  </div>
</div>
`;
      // console.log(teamHTML);
      // console.log(`additionalHTML = ${additionalHTML}`);
    }
  });

  teamHTML += `
  </section>
  </body>
</html>`

return teamHTML

  // functionWriteToFile()
}
module.exports = htmlTemplate