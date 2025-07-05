const Info = {
  name: 'Tien Hai Cao',
  stack: ['Back-end Developer', 'Data Analyst', 'Data Scientist', 'Front-end Developer'],
  bio: 'I’m a tech and data enthusiast, passionate about uncovering insights and solving complex problems. I enjoy diving into new challenges, experimenting with creative ideas, and learning every day. Great to connect with you!'
}

const SkillInfo = [
  {
    title: 'Data Analysis',
    skills: ['SQL Server', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Data Science',
    skills: ['Scikit-learn', 'Tensorflow', 'Keras', 'PyTorch']
  },
  {
    title: 'Front-end',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'TailwindCSS', 'Bootstrap']
  },
  {
    title: 'Back-end',
    skills: ['ExpressJS', 'NestJS', 'Django', 'FastAPI', 'Gin', 'SpringBoot', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ']
  },
  {
    title: 'Languages',
    skills: ['GO', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'Jupyter', 'Tableau', 'PowerBI', 'WordPress', 'Docker']
  }
]

const ProjectInfo = [
  {
    title: "Hybrid Recommender System",
    desc: "The system aims to recommend films to users based on the content similarity of films they have liked or viewed previously. It utilizes a content-based filtering approach, specifically employing the Term Frequency-Inverse Document Frequency (TF-IDF) vectorization technique combined with Cosine Similarity to identify similar films.",
    image: "hrs_prj.png",
    live: false,
    technologies: ["Python", "Scikit-learn", "Jupyter"],
    link: null,
    github: "https://github.com/tienhai2808/film_recommendation_system",
    feCode: null,
    beCode: null
  },
  {
    title: "VNExpress Clone",
    desc: "This project is a Content Management System (CMS) designed to simulate the workflow of a major online news portal like VnExpress. It's built using the Django framework (Python) and employs Server-Side Rendering (SSR).",
    image: "vnx_prj.png",
    live: false,
    technologies: ["Python", "Django", "JavaScript", "HTML", "CSS", "SQLite"],
    link: null,
    github: "https://github.com/tienhai2808/cms",
    feCode: null,
    beCode: null
  },
  {
    title: "Civil Law Chatbot",
    desc: "This application allowing users to ask legal questions and receive answers based on relevant legal articles. It features user authentication, a question submission interface, and displays past Q&A history. This service leverages Retrieval-Augmented Generation (RAG) to answer questions related to Vietnamese civil law. It uses a vector database populated with legal text extracted from official documents and a generative AI model (Google Gemini) to synthesize answers based on retrieved relevant laws.",
    image: "civillawai_prj.png",
    live: false,
    technologies: ["Python", "ReactJS", "TailwindCSS", "FastAPI", "Supabase", "Langchain"],
    link: null,
    github: null,
    feCode: "https://github.com/tienhai2808/civillaw_ai-fe",
    beCode: "https://github.com/tienhai2808/civillaw_ai-be"
  },
  {
    title: "Choose Right Cinema",
    desc: "This Node.js/Express service aims to help users find the best cinema to watch a specific film based on their location, desired date, proximity, and showtime availability. Scraping cinema, film, and showtime information from external sources. Persisting scraped data in a MongoDB database and utilizing Redis for caching. Leveraging geospatial queries, real-time routing information (OSRM), dynamic showtime scraping, and AI analysis (Google Gemini) to suggest the most suitable cinema.",
    image: "crc_prj.png",
    live: false,
    technologies: ["ExpressJS", "ReactJS", "MongoDB", "Redis", "Puppeteer"],
    link: null,
    github: null,
    feCode: "https://github.com/tienhai2808/choose_right_cinema-fe",
    beCode: "https://github.com/tienhai2808/choose_right_cinema-be"
  },
  {
    title: "Virgo Chat",
    desc: "Virgo Chat is Node.js with key features including user authentication (including Google OAuth and Face ID), real-time messaging, group/private chat, notifications, user relationships, calls, and an admin dashboard.",
    image: "virgochat_prj.png",
    live: false,
    technologies: ["NextJS", "ExpressJS", "MongoDB", "SocketIO", "TailwindCSS", "MongoDB", "FaceapiJS"],
    link: null,
    github: null,
    feCode: "https://github.com/VirgoChart/virgo_chat-FE",
    beCode: "https://github.com/tienhai2808/virgo_chat-be"
  },
  {
    title: "Simple Data Mining",
    desc: "This project performs data mining analyses on sales data. It leverages several techniques, including Association Rule Mining, K-Means Clustering, and Time Series Analysis (ARIMA, Prophet, LSTM). The primary goal appears to be extracting insights from historical sales data, identifying patterns in product purchases, grouping similar entities, and forecasting future trends.",
    image: "sdm_prj.png",
    live: false,
    technologies: ["Python", "Tensorflow", "Jupyter", "Scikit-learn"],
    link: null,
    github: "https://github.com/tienhai2808/simple_data_mining",
    feCode: null,
    beCode: null
  },
  {
    title: "Icondenim Clone",
    desc: "This is an e-commerce website project designed to simulate the website of the famous men's fashion store Icondenim. The project is built using Spring Boot (Java) framework, PostgreSQL database, Redis caching, RabbitMQ message queue and SMTP server for sending emails.",
    image: "icondenim_prj.png",
    live: false,
    technologies: ["SpringBoot", "Redis", "RabbitMQ", "PostgreSQL", "Java", "SMTP"],
    link: null,
    github: null,
    feCode: "https://github.com/IcondenimClone/icondenim-fe",
    beCode: "https://github.com/tienhai2808/icondenim-be"
  }
]

export { Info, SkillInfo, ProjectInfo }