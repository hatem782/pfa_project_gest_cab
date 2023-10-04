const Mailer = require("./Mail_Sender");

exports.account_creation_mailer = async (user, password) => {
  const { firstName, lastName, email, login } = user;
  let subject = "Account Credentials";
  let content = `
    <div>
    <h2>Welcome ${firstName} ${lastName} to our plateforme</h2>
    <p>here you will find the informations about new account</p>
    <p>your login is : <b>${login}</b> </p>
    <p>your M-D-P is : <b>${password}</b> </p>
    </div>
    `;
  await Mailer.Mail_Sender(email, content, subject);
};
