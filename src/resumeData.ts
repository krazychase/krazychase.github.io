export interface SocialLink {
  name: string;
  url: string;
}

export interface WorkExperience {
  CompanyName: string;
  specialization: string;
  MonthOfLeaving: string;
  YearOfLeaving: string;
  Achievements: string;
}

export interface Education {
  UniversityName: string;
  specialization: string;
  MonthOfPassing: string;
  YearOfPassing: string;
  Achievements: string;
}

export interface Skill {
  skillname: string;
  level: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  catagory: string;
  imgurl: string;
  link: string;
}

export interface Testimonial {
  name: string;
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  role: string;
  address: string;
  website: string;
  email: string;
  socialLinks: SocialLink[];
  aboutme: string;
  work: WorkExperience[];
  education: Education[];
  skillsDescription: string;
  skills: Skill[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
  contactUsMessage: string;
}

const resumeData: ResumeData = {
    "name": "Chase Brown",
    "role": "Computer Scientist / Software Engineer / Cybersecurity Enthusiast",
    "address":"Fukuoka-shi, Hakata-ku, Japan",
    "website":"https://krazychase.github.io",
    "email":"cabrown.business@gmail.com",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/chase-brown-1b1b0a245/",
        },
        {
          "name":"github",
          "url":"http://github.com/krazychase",
        }
      ],
    "aboutme":"I am an innovative Software Engineer who learns quickly and embraces challenges. I seek opportunities that allow me to use/expand my knowledge of software engineering, cybersecurity, and new technologies. I hope to learn, grow, and experience a myriad of new things.",
    "work":[
      {
        "CompanyName":"Alterbooth (株式会社オルターブース)",
        "specialization":"Cloud Solutions Engineer",
        "MonthOfLeaving":"Current",
        "YearOfLeaving":"",
        "Achievements":"Architect, develop, and deploy cloud solutions leveraging Microsoft Azure services. Design and implement secure, scalable, and efficient cloud solutions to meet client needs. Collaborate with cross-functional teams to ensure seamless integration of cloud solutions into existing systems. Provide technical guidance and support to clients, ensuring successful adoption and utilization of cloud technologies. Stay updated with the latest industry trends and best practices in cloud computing to continuously improve service offerings."
      },
      {
        "CompanyName":"Davey Japan Co., LTD",
        "specialization":"System Engineer",
        "MonthOfLeaving":"December",
        "YearOfLeaving":"2024",
        "Achievements":"Architected, deployed, and maintained website infrastructure utilizing AWS services, including EC2, S3, RDS, and CloudFront, to ensure high availability. Administered and optimized Microsoft 365 tenant through MS Admin Center, Entra, and Exchange, to enhance organizational productivity and security. Contributed to full-stack software development, collaborating on both front and backend projects using Angular, TypeScript, Ruby on Rails, and PostgreSQL. Assisted project management for an overseas development team through GitHub and Asana, facilitating seamless collaboration, version control, and on-time project delivery."
      },
      {
        "CompanyName":"Walker Products Inc.",
        "specialization":"Software Engineer",
        "MonthOfLeaving":"September",
        "YearOfLeaving":"2023",
        "Achievements":"Designed, developed, and maintained automotive testing software from the ground up, using Python, C++, and SQL, ensuring accuracy and reliability for critical testing processes. Engineered compact, secure code for microcontrollers in C/C++, optimizing performance and resource efficiency. Integrated and deployed software components into hardware test systems using Git, enabling streamlined testing and version control. Developed specifications and assessed operational feasibility of hardware solutions, aligning technical design with functional requirements. Oversaw the operation and maintenance of 3D printers and associated software, reducing prototyping cost and increasing precision. Fostered cross-functional collaboration with engineering and production teams to meet project milestones and achieve unified goals"
      },
      {
        "CompanyName":"NASA Colorado Space Grant Consortium",
        "specialization":"Intern",
        "MonthOfLeaving":"July",
        "YearOfLeaving":"2019",
        "Achievements":"Build and maintain rapid prototyping machines such as 3D printers, CNC machines, and CO2 laser cutters. Assist in development of JavaScript program to interact with hardware."
      }
    ],
    "education":[
      {
        "UniversityName":"Colorado Mesa University",
        "specialization":"Bachelor of Science in Computer Science",
        "MonthOfPassing":"March",
        "YearOfPassing":"2021",
        "Achievements":"Cybersecurity Minor / Magna Cum Laude / 3.91 GPA"
      }
    ],
    "skillsDescription":"Languages / Frameworks",
    "skills":[
      {
        "skillname":"Python",
        "level":"90"
      },
      {
        "skillname":"JavaScript / React / TypeScript / Angular",
        "level":"70"
      },
      {
        "skillname":"C#",
        "level":"70"
      },
      {
        "skillname":"SQL, PostgreSQL, MySQL, Access",
        "level":"70"
      },
      {
        "skillname":"Agile / Scrum",
        "level":"80"
      },
      {
        "skillname":"Git / GitHub",
        "level":"90"
      }
    ],
    "portfolio":[
      {
        "name":"This Website!",
        "description":"The website you're on! Created by converting a static HTML page to React and adding in Typescript.",
        "catagory":"Website",
        "imgurl":"images/portfolio/Website.png",
        "link":"https://github.com/krazychase/krazychase.github.io"
      },
      {
        "name":"MAF Sensor Test Stand",
        "description":"A large-scale program and hardware designed to interact with physical test-stands to automatically test Mass Air Flow sensor functionality. It was developed using Python, MSSQL, TKinter, Matplotlib, and many other libraries. This was successfully implimented and more than doubled production numbers while reducing scrap rates and human errors.",
        "catagory":"Desktop Application",
        "imgurl":"images/portfolio/MAF.png",
        "link":"https://www.walkerproducts.com/products/mass-air-flow-sensors/"
      },
      {
        "name":"Excel to SQL Transfer",
        "description":"A program I designed, tested, and delivered that analyzes thousands of Excel spreadsheets and transfers relevant data to a SQL database. This used Python, Sqlite, Pandas, and more. I was able to analyze and transfer %100 of data before deadline.",
        "catagory":"Database Software",
        "imgurl":"images/portfolio/transfer.png",
        "link":"https://sqlite.org/index.html"
      },
      {
        "name":"AI Iris Classification",
        "description":"A project that created and analyzed multiple machine learning models for prediction iris species given the 4 features. I used many different methods such as K Neighbors Classifier and Support Vector Classification. I made this using Python, SKLearn, and Keras. I was able to achieve %100 accuracy in species identification.",
        "catagory":"AI / Machine Learning",
        "imgurl":"images/portfolio/iris.jpg",
        "link":"https://github.com/krazychase/SchoolStuff/tree/master/AI/iris"
      }
    ],
    "testimonials":[
      {
        "name":"Some technical guy",
        "title":"Tech place",
        "description":"This is a sample testimonial"
      },
      {
        "name":"Some technical guy",
        "title":"Tech place",
        "description":"This is a sample testimonial"
      }
    ],
    "contactUsMessage":"Have a new project / opportunity in mind? Reach out and let's discuss it! Let's turn that idea into something awesome :)"
  }
  
  export default resumeData