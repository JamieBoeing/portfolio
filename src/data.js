const projects = [
  {
    id: 1,
    title: 'Recipes API',
    description:
      'Developed a Node.js application that serves as a recipe API server.\nThis RESTful API provides a collection of recipes with details such as ingredients, instructions, and cooking times.\nUtilizing Express.js, the server handles HTTP requests for retrieving, creating, updating, and deleting recipes.\nThe data is stored in a JSON file and can be easily extended to include additional features like user authentication and search functionality.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/JamieBoeing/unit_2_project',
    liveDemoLink: 'https://yourproject1demo.com',
    imageUrl: 'img/recipe.svg', 
  },
  {
    id: 2,
    title: 'Art Supplies',
    description:
      'Designed and developed a comprehensive e-commerce platform for an art supplies store, showcasing a range of art materials and tools.\nLeveraging the MERN (MongoDB, Express.js, React, Node.js) stack, the project offers a seamless user experience from browsing products to making purchases.',
    technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Digital Ocean'],
    githubLink: 'https://github.com/JamieBoeing/art-supplies',
    liveDemoLink: 'https://art-supplies.jamieboeing.me/orders',
    imageUrl: 'img/art.svg', 
  },
  {
    id: 3,
    title: 'Bazaar',
    description:
      'A group completed, full MERN stack site, offering a user the ability to login, logout, sign up to be a seller and start entering their own items to add.\nThis artistic website features multi functions utilizing React and Node.js.',
    technologies: ['React', 'Express', 'MongoDB', 'Digital Ocean'],
    githubLink: 'https://github.com/joe-bor/Etsy_Capstone',
    liveDemoLink: 'https://bazaar.hlysllrs.me/home',
    imageUrl: 'img/bazaar.svg', 
  },
  // Add more project objects here...
];





// Express, VS Code, Github, OpenAI API, Gulp, WebPack, Nginx, PM2, Bootstrap, Jest, Supertest, JsonWebToken, Certbot

const skills = [
  {
    category: 'Front-end Development &  Programming Languages',
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
        image: 'php-icon.png', // Image filename for Python
      },
      {
        name: 'React',
        image: 'react-icon.png', // Image filename for React
      },
      {
        name: 'HTML',
        image: 'html-icon.png', // Image filename for HTML
      },
      {
        name: 'CSS',
        image: 'css-icon.png', // Image filename for CSS
      },
      
    ],
  },
  {
    category: 'Design Tools',
    skills: [
      {
        name: 'Adobe Photoshop',
        image: 'photoshop-logo.png', 
      },
      {
        name: 'Adobe Illustrator',
        image: 'ai-icon.png', 
      },
      {
        name: 'Node.js',
        image: 'node-icon.png', 
      },
    ],
  },
  {
    category: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        image: 'mongoDb-icon.png', // Image filename for React
      },
      {
        name: 'Digital Ocean',
        image: 'digital-icon.png', // Image filename for HTML
      },
    ],
  },
  // Add more categories and skills as needed...
];


const aboutMe = {
  name: 'Jamie Boeing',
  title: 'Full-Stack Web Developer',
  tag:
    'As an accomplished and versatile professional with over a decade of experience, I bring a unique blend of skills to Software Engineering, and Graphic Design.',
  bio:
    'Full-Stack Web Developer, Graphic Designer, and Artist, fueled by a passion for collaboration.\nBacked by a foundation in customer service and management, I offer valuable business expertise.\nEnthusiastic about personal growth, community engagement, travel, and meaningful connections.\nExcited to integrate into the Web Developer community, contributing diverse skills to exciting opportunities.',
};


const experienceData = [
  {
    id: 1,
    title: 'Software Engineering Student',
    company: 'General Assembly',
    location: 'Remote',
    date: 'Sept 2023',
    projects: [
      {
        name: 'Personal Portfolio',
        link: 'GitHub Repository',
      },
      {
        name: 'Group Bazaar Project',
        link: 'Express React Node.js [GitHub Repository]',
      },
      {
        name: 'Art Supplies Store',
        link: 'Express React Node.js [GitHub Repository] [LiveLink Deployment]',
      },
      {
        name: 'Recipes API',
        link: 'GitHub Repository',
      },
      {
        name: 'Quiz Biz - A simple trivia game',
        link: 'VS Code [GitHub Repository]',
      }
    ],
    description: [
      'Successfully completed 500+ hours of expert-led instruction in Full Stack Web and Software Development.',
      'Completed hands-on learning of the fundamentals and the industry\'s most in-demand technologies.',
      'Developed projects, including:'
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
];


const educationData = [
  {
    id: 1,
    image: 'degree.png',
    degree: 'Associates in Computer Aided Design',
    certification: 'Web Certification',
    university: 'John Wood Community College',
    graduationYear: 2016,
    achievements: ['Academic Sorority', "Dean's list student"],
  },
  {
    id: 2,
    image: 'degree.png',
    degree: 'Web Development Bootcamp',
    university: 'General Assembly',
    graduationYear: 2023,
    achievements: [
      'Deployed and working current projects',
      'Successfully completed 500+ hours of expert-led instruction in Full Stack Web and Software Development',
      `Completed hands-on learning of the fundamentals and the industry's most in-demand technologies.`,
    ],
  },
  // Add more education entries...
];

const wordData = [
  { text: 'Full-Stack Developer', value: 10 },
  { text: 'Web Development', value: 8 },
  { text: 'JavaScript', value: 7 },
  { text: 'React', value: 6 },
  { text: 'Node.js', value: 5 },
  { text: 'Express.js', value: 5 },
  { text: 'HTML', value: 4 },
  { text: 'CSS', value: 4 },
  { text: 'MongoDB', value: 4 },
  { text: 'Responsive Design', value: 4 },
  { text: 'Git', value: 3 },
  { text: 'RESTful API', value: 3 },
  { text: 'UI/UX Design', value: 3 },
  { text: 'Problem Solving', value: 3 },
  { text: 'Agile', value: 2 },
  { text: 'Scrum', value: 2 },
  { text: 'Team Collaboration', value: 2 },
  { text: 'Front-end', value: 2 },
  { text: 'Back-end', value: 2 },
  { text: 'Database', value: 2 },
  { text: 'Creative', value: 3 },
  { text: 'Adaptable', value: 3 },
  { text: 'Innovative', value: 3 },
  { text: 'Detail-Oriented', value: 3 },
  { text: 'Problem Solver', value: 3 },
  { text: 'Collaborative', value: 3 },
  { text: 'Communicative', value: 3 },
  { text: 'Organized', value: 3 },
  { text: 'Curious', value: 3 },
  { text: 'Motivated', value: 3 },
  { text: 'Resourceful', value: 3 },
  { text: 'Analytical', value: 3 },
  { text: 'Patient', value: 3 },
  { text: 'Empathetic', value: 3 },
  { text: 'Positive', value: 3 },
  { text: 'Team Player', value: 3 },
  { text: 'Leadership', value: 3 },
  { text: 'Self-Motivated', value: 3 },
  { text: 'Open-Minded', value: 3 },
  { text: 'Resilient', value: 3 },
];

export default wordData;


const servicesData = [
  {
    category: 'Full-Stack Development',
    service: 'End-to-End Web Application Development',
    description: 'Crafting seamless, responsive, and scalable web applications that cover every aspect of the user experience, from front-end design to robust back-end functionality.',
  },
  {
    category: 'Front-End Development',
    service: 'User-Centric Front-End Solutions',
    description: 'Building captivating, user-friendly interfaces and ensuring optimal performance on various devices, creating an exceptional first impression for your web visitors.',
  },
  {
    category: 'Back-End Development',
    service: 'Server-Side Logic and Data Management',
    description: 'Architecting the backbone of your web applications, handling data storage, user authentication, and the intricacies of server-side logic to empower your website or platform.',
  },
  {
    category: 'Web Design',
    service: 'Creative Web Interface Design',
    description: 'Crafting visually appealing and intuitive designs that not only attract but engage your audience, ensuring a delightful user experience with a focus on aesthetics and usability.',
  },
  {
    category: 'Database Management',
    service: 'Efficient Database Design and Management',
    description: 'Designing and optimizing databases to store, organize, and retrieve data seamlessly, ensuring data integrity and smooth system operation.',
  },
  {
    category: 'API Development',
    service: 'Custom API Creation and Integration',
    description: 'Developing customized APIs to facilitate data communication between various software components, enabling seamless integration and data exchange.',
  },
  {
    category: 'Performance Optimization',
    service: 'Web Application Performance Enhancement',
    description: 'Fine-tuning web applications to maximize speed, responsiveness, and efficiency, ensuring that your digital solutions operate at their best.',
  },
  {
    category: 'Graphic Design',
    service: 'Logo Design',
    description: 'Crafting unique and impactful logos to represnet your brand or business.',
  },
  {
    category: 'Graphic Design',
    service: 'Print Design',
    description: 'Designing visually appealing print materials, such as brochures, posters, and flyers.'
  },
  // add more services as needed...
];



const images = [
  'image1.jpeg',
  'image2.jpeg',
  'image3.jpeg',
  'image4.jpeg',
  'image5.jpeg',
  'profileImage.jpg'

]


const graphics = [
  'nail-cards.jpg',
  'salon-card.jpg',
  'tattoo-card.jpg',
  'mom-brochure.jpg',
  'flyer.jpg'
]

export { projects, skills, aboutMe, experienceData, educationData, wordData, servicesData, images, graphics };
