function sendMessage() {
  const message1 = document.getElementById('message1').value;
  const message2 = document.getElementById('message2').value;

  // URL du webhook pour le premier message
  const webhookURL1 = 'https://discord.com/api/webhooks/1338292788047118337/AYt_B62lQm9bZ_vhYN3bJdXBgr-ExV51zqZKyqv8JyBL0YoGXe5f3QG1WnAYOH3x4jn_';
  // URL du webhook pour le deuxième message
  const webhookURL2 = 'https://discord.com/api/webhooks/1338299137686245477/XZMsYmyBZJENrV3bbPgdTdev5t3Ktam-bUONIHD6nCbE8tD3HPIGLuIiJHd_lYZCyzvc';

  // Envoyer le premier message
  fetch(webhookURL1, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: "||@everyone|| nouvel utilisateur : ||" + message1 + "||" })
  }).then(response => {
    if (response.ok) {
      console.log('Message 1 envoyé avec succès !');
    } else {
      console.log('Erreur lors de l\'envoi du message 1.');
    }
  }).catch(error => {
    console.error('Erreur :', error);
    console.log('Erreur lors de l\'envoi du message 1.');
  });

  // Envoyer le deuxième message
  fetch(webhookURL2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: "||@everyone|| nouvel utilisateur : ||"+ message2+"||" })
  }).then(response => {
    if (response.ok) {
      console.log('Message 2 envoyé avec succès !');
    } else {
      console.log('Erreur lors de l\'envoi du message 2.');
    }
  }).catch(error => {
    console.error('Erreur :', error);
    console.log('Erreur lors de l\'envoi du message 2.');
  });
}
