const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();

async function uploadUserData() {
  // Create Bangkit Collections
  const bangkitCollections = db.collection('Bangkit');

  // Create Bangkit Documents
  const bangkit2024 = await bangkitCollections.doc('Bangkit 2024');

  // User data
  const USER_DATA = {
    name: 'John',
    campusName: 'Bangkit University',
    majors: 'Informatic Engineering'
  };

  // Push data into Documents
  await bangkit2024.set(USER_DATA);
  console.log('Data uploaded successfully!');
}

uploadUserData().catch(console.error);
