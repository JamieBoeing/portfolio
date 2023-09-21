// data.js

const projects = [
  {
    id: 1,
    title: 'Recipes API',
    description: 'Recipe API Server: Developed a Node.js application that serves as a recipe API server. This RESTful API provides a collection of recipes with details such as ingredients, instructions, and cooking times. Utilizing Express.js, the server handles HTTP requests for retrieving, creating, updating, and deleting recipes. The data is stored in a JSON file and can be easily extended to include additional features like user authentication and search functionality.',
    technologies: ['React', 'Node.js'],
    githubLink: 'https://github.com/JamieBoeing/unit_2_project',
    // liveDemoLink: 'https://yourproject1demo.com',
  },
  {
    id: 2,
    title: 'Art Supplies',
    description: 'Designed and developed a comprehensive e-commerce platform for an art supplies store, showcasing a range of art materials and tools. Leveraging the MERN (MongoDB, Express.js, React, Node.js) stack, the project offers a seamless user experience from browsing products to making purchases.',
    technologies: ['React', 'Express'],
    githubLink: 'https://github.com/JamieBoeing/art-supplies',
    liveDemoLink: 'https://art-supplies.jamieboeing.me/orders',
  },
  {
    id: 3,
    title: 'Bazaar',
    description:'A group completed, full mern stack site, offering a user the ability to login, logout, sign up to be a seller and start entering their own items to add. This artistic website features multi functions utiilzing React, and Node.js',
    technologies: ['React', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/joe-bor/Etsy_Capstone',
    liveDemoLink: 'https://bazaar.hlysllrs.me/home',
  },
  // Add more project objects here...
];

// const skills = [
//   {
//     category: 'Programming Languages',
//     skills: ['JavaScript', 'Python'],
//   },
//   {
//     category: 'Front-end Development',
//     skills: ['React', 'HTML', 'CSS'],
//   },
//   {
//     category: 'Back-end Development',
//     skills: ['Node.js', 'PHP', 'Django'],
//   },
//   {
//     category: 'Databases',
//     skills: ['MongoDB'],
//   },
//   {
//     category: 'Operating Systems',
//     skills: ['Mac', 'Windows', 'Linux'],
//   },
//   {
//     category: 'Design Tools',
//     skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
//   },
//   {
//     category: 'Other',
//     skills: ['Management', 'Customer Service', 'Design'],
//   },
// ];
const skills = [
  {
    category: 'Programming Languages',
    skills: [
      {
        name: 'JavaScript',
        image: 'javascript-icon.png', // Image filename for JavaScript
      },
      {
        name: 'Python',
        image: 'python-icon.png', // Image filename for Python
      },
      {
        name: 'PHP',
        image: 'phpn-icon.png', // Image filename for Python
      },
    ],
  },
  {
    category: 'Front-end Development',
    skills: [
      {
        name: 'React',
        image: 'react-icon.png', // Image filename for React
      },
      {
        name: 'HTML',
        image: 'html.png', // Image filename for HTML
      },
      {
        name: 'CSS',
        image: 'css.png', // Image filename for CSS
      },
    ],
  },
  {
    category: 'Design Tools',
    skills: [
      {
        name: 'Adobe',
        image: 'adobe-icons.jpeg', // Image filename for React
      },
      {
        name: 'Adobe Illustrator',
        image: 'ai-icon.jpeg', // Image filename for HTML
      },
      {
        name: 'Node.js',
        image: 'node-icon.jpeg', // Image filename for HTML
      },
    ],
  },
  {
    category: 'Database',
    skills: [
      {
        name: 'MongoDB',
        image: 'mongoDb-icon.png', // Image filename for React
      },
      {
        name: 'Digital Ocean',
        image: 'digital-icon.jpeg', // Image filename for HTML
      },
    ],
  },
  // Add more categories and skills as needed...
];


const aboutMe = {
  name: 'Jamie Boeing',
  title: 'Full-Stack Web Developer',
  tag: 'As an accomplished and versatile professional with over 10 years of experience, I possess a unique blend of skills in software engineering, graphic design, artistry, management, and communications. My passion for people, meticulous attention to detail, and boundless creativity make me an exceptional asset for any project. I thrive on facing difficult challenges, an educational environment, and personal growth.',
  bio: 'My name is Jamie Boeing, I am a Full-Stack Web developer, Graphic Designer/Artist, Business Owner/Salon Operator. I love to travel the world trying new things, and meeting new people along the way. On my free time you will find me playing Roller Derby, kayaking, practicing yoga or riding my moped around town. Most people would say that I am extremely outgoing, and like to think outside the box. My passions are art, music, people, and nature. It is so great to meet you!' 
  // Add more personal details here...
}



const experienceData = [
  {
    id: 1,
    title: 'Software Engineering Student',
    company: 'General Assembly',
    location: 'Remote',
    date: 'Sept 2023',
    description: [
      'Successfully completed 500+ hours of expert-led instruction in Full Stack Web and Software Development.',
      'Completed hands-on learning of the fundamentals and the industry\'s most in-demand technologies.',
      'Developed projects, including:',
      '- Personal Portfolio: [GitHub Repository]',
      '- Group Bazaar Project: Express React Node.js [GitHub Repository]',
      '- Art Supplies Store: Express React Node.js [GitHub Repository] [LiveLink Deployment]',
      '- Recipes API: [GitHub Repository]',
      '- Quiz Biz - A simple trivia game: VS Code [GitHub Repository]'
    ]
  },
  {
    id: 2,
    title: 'Graphic Designer-Artist',
    company: 'Freelance',
    location: 'Remote',
    date: '2016–Current',
    description: [
      'Personalized branding, logo design, and web design.',
      'Prepared files for specialty printing and file conversions.',
      'Lead Customer Service and Consultations.',
      'Utilized Adobe Photoshop, Adobe Illustrator, & Adobe InDesign.',
      'Worked with all types of machines and software for printing and embroidery.'
    ]
  },
  {
    id: 3,
    title: 'Salon Owner/Operator | Cosmetologist',
    company: 'Evoke Salon',
    date: '2010–Current',
    description: [
      'Managed daily operations and task assignment.',
      'Created original & interesting Interior design for multiple levels and layouts in the business.',
      'Designed custom logos and overall brand design, and print work.',
      'Handled Marketing, Advertising & Communications.',
      'Helped facilitate and implement customer satisfaction and human resources.',
      'Created Business operation documentation and implementation with Adobe suites.',
      'Maintained a retail website and handled all social media accounts.',
      'Continued Education, diversity, sexual harassment, & domestic violence training.'
    ]
  }
  // Add more experience entries...
]

const educationData = [
  {
    id: 1,
    degree: 'Associates in Computer Aided Design', 
    certification: 'Web Certification',
    university: 'John Wood Community College',
    graduationYear: 2016,
    achievements: 'Academic Sorority, and Dean list student'
  },
  {
    id: 2,
    degree: 'Web Development Bootcamp',
    university: 'General Assembly',
    graduationYear: 2023,
    achievements: [
      'Completed many successful current projects',
      'add stats and certs here'
    ]
  },
  // Add more education entries...
]



const wordData = [
  {
  word:'Full-Stack Developer', 
  word:'Web Development', 
  word:'JavaScript', 
  word:'React', 
  word:'Node.js', 
  word:'Express.js', 
  word:'HTML',
  word:'CSS',
  word:'MongoDB', 
  word:'Responsive Design',
  word:'Git', 
  word:'RESTful API', 
  word:'UI/UX Design', 
  word:'Problem Solving', 
  word:'Agile', 
  word:'Scrum',
  word:'Team Collaboration',
  word:'Front-end', 
  word:'Back-end', 
  word:'Database', 
  word:'Creative', 
  word:'Adaptable', 
  word:'Innovative', 
  word:'Detail-Oriented', 
  word:'Problem Solver', 
  word:'Collaborative', 
  word:'Communicative', 
  word:'Organized', 
  word:'Curious', 
  word:'Motivated', 
  word:'Resourceful', 
  word:'Analytical', 
  word:'Patient', 
  word:'Empathetic', 
  word:'Positive', 
  word:'Team Player', 
  word:'Leadership',
  word:'Self-Motivated', 
  word:'Open-Minded', 
  word:'Resilient',
}
]

const servicesData = [
  {
    category: 'Web Development',
    service: 'Front-End Web Development',
  },
  {
    category: 'Web Development',
    service: 'Back-End Web Development',
  },
  // Add more services...
]


export { projects, skills, aboutMe, experienceData, educationData, wordData, servicesData };
