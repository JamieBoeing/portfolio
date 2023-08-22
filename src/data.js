// data.js

const projects = [
    {
      id: 1,
      title: 'Recipes API',
      description: 'Recipe API Server: Developed a Node.js application that serves as a recipe API server. This RESTful API provides a collection of recipes with details such as ingredients, instructions, and cooking times. Utilizing Express.js, the server handles HTTP requests for retrieving, creating, updating, and deleting recipes. The data is stored in a JSON file and can be easily extended to include additional features like user authentication and search functionality.',
      technologies: ['React', 'Node.js'],
      githubLink: 'https://github.com/JamieBoeing/unit_2_project',
    //   liveDemoLink: 'https://yourproject1demo.com',
    },
    {
      id: 2,
      title: 'Art Supplies',
      description: 'Designed and developed a comprehensive e-commerce platform for an art supplies store, showcasing a range of art materials and tools. Leveraging the MERN (MongoDB, Express.js, React, Node.js) stack, the project offers a seamless user experience from browsing products to making purchases. ',
      technologies: ['React', 'Express'],
      githubLink: 'https://github.com/JamieBoeing/art-supplies',
      liveDemoLink: 'https://art-supplies.jamieboeing.me/orders',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description of project 2...',
        technologies: ['React', 'Express'],
        githubLink: 'https://github.com/yourusername/project2',
        liveDemoLink: 'https://yourproject2demo.com',
      },
    // Add more project objects here...
  ];
  
  const skills = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python'],
    },
    {
      category: 'Front-end Development',
      skills: ['React', 'HTML', 'CSS'],
    },
    {
      category: 'Back-end Development',
      skills: ['Node.js', 'PHP', 'Django'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB'],
    },
    {
      category: 'Operating Systems',
      skills: ['Mac', 'Windows', 'Linux'],
    },
    {
      category: 'Design Tools',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    },
    {
      category: 'Other',
      skills: ['Management', 'Customer Service', 'Design'],
    },
  ];
  
  
  const aboutMe = {
    name: 'Jamie Boeing',
    title: 'Full-Stack Web Developer',
    tag: 'As an accomplished and versatile professional with over 10 years of experience, I possess a unique blend of skills in software engineering, graphic design, artistry, management, and communications. My passion for people, meticulous attention to detail, and boundless creativity make me an exceptional asset for any project. I thrive on facing difficult challenges, an educational environment, and personal growth. ',
    bio: 'Full bio here'
    // Add more personal details here...
  };
  
  export { projects, skills, aboutMe };
  