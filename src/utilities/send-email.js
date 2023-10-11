// const BASE_URL = '/api/contact';

// const api = {
//   get: async (url) => {
//     try {
//       const response = await fetch(`${BASE_URL}${url}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   },

//   post: async (url, data) => {
//     try {
//       const response = await fetch(`${BASE_URL}${url}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Error:', error);
//       throw error;
//     }
//   },

//   // Add other HTTP methods as needed (e.g., put, delete, etc.)
// };

// module.exports = api;
