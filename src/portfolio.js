const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://joshuaedgcombe.com',
  title: 'JE.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joshua Edgcombe',
  role: 'FPGA Engineer',
  description:
  'Currently working at DornerWorks in Grand Rapids, Michigan with a strong background in software development, digital design, and electrical engineering. I originally learned to program in 2008 and have since learned to write software in many different programming languages in a variety of environments including web, mobile, native, system, and embedded. I received my MSE in computer and electrical engineering in 2021 where I gained experience implementing and accelerating algorithms on FPGAs, GPUs, and DSPs. Since graduation I have been lucky enough to design, develop, and test a core component of the world\'s first deep-space radiation-hardened ethernet switch that will be used in a mission-critical capacity for the Artemis missions. I\'ve also been able to significantly contribute to a constellation of satellites that will soon be competing with Starlink, as well as a few defense related projects.',
  resume: 'https://github.com/midimaster21b/cleanfolio/raw/main/public/JoshuaEdgcombeResume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/joshuaedgcombe/',
    github: 'https://github.com/midimaster21b',
    youtube: 'https://www.youtube.com/c/JoshEdgcombe',
    twitter: 'https://twitter.com/midimaster21b',
  },
}

const projects = [
  {
    name: 'Image Stitching',
    description:
      'Implemented a full image processing pipeline from scratch that included feature detection, feature matching, image transformation, and image stitching portions. This pipeline was accelerated on an FPGA and a GPU separately for performance comparison.',
    stack: ['C', 'C++', 'Cuda', 'OpenCV', 'VHDL', 'Verilog', 'Python', 'Tcl', 'SURF', 'FPGA', 'GPU', 'Digilent Genesys ZU'],
    sourceCode: '',
    livePreview: 'https://scholarworks.gvsu.edu/theses/1018/',
    permalink: '/projects/thesis',
    md_url: '/projects/thesis/index.md',
  },
  {
    name: 'SDR Transceivers',
    description:
    'Implemented analog and digital communication transceivers using software-defined radios and GNU Radio Companion. Custom blocks were created to support the implementation of modulation and demodulation of AM, FM, FSK, PSK, and QAM signals. This included a dive into the theory behind several options for clock and data recovery.',
    stack: ['C', 'Python', 'GNU Radio', 'Software-Defined Radio', 'HackRF One'],
    sourceCode: '',
    livePreview: 'https://peer.asee.org/implementation-of-analog-and-digital-communications-transceivers-on-sdr-platforms-using-gnu-radio-companion',
    // permalink: '/projects/sdr-gnu-radio-transceivers',
    permalink: '/#projects',
    md_url: '/projects/sdr-gnu-radio-transceivers/index.md',
  },
  {
    name: 'SHA-256',
    description:
    'Developed an implementation of the SHA-256 algorithm in both Verilog and VHDL. Originally, I wrote this implementation in Verilog for an assignment in an encryption course, but I later converted the code to VHDL because that was what I was mainly developing in at the time.',
    stack: ['Verilog', 'VHDL', 'Basys3'],
    sourceCode: '',
    livePreview: '',
    // permalink: '/projects/sha-256',
    permalink: '/#projects',
    md_url: '/projects/sha-256/index.md',
  },
  {
    name: 'OV7670 To VGA',
    description:
    'Developed a VHDL implmentation that initializes an OV7670 image sensor and writes the output to a VGA output using a Digilent Basys3 development board.',
    stack: ['VHDL', 'Basys3'],
    sourceCode: '',
    livePreview: '',
    // permalink: '/projects/image-sensor-lab',
    permalink: '/#projects',
    md_url: '/projects/image-sensor-lab/index.md',
  },
  {
    name: 'MSP432 Driver Library',
    description:
      'Developed a peripheral driver library for the Ti MSP432 microcontroller to gain experience interacting with peripherals.',
    stack: ['C', 'MSP432'],
    sourceCode: 'https://github.com/midimaster21b/MSP432_DriverLibrary',
    livePreview: '',
    // permalink: '/projects/msp432-drivers',
    permalink: '/#projects',
    md_url: '/projects/msp432-drivers/index.md',
  },
  {
    name: 'Emacs Stock Ticker',
    description:
    'Developed an Emacs major mode that allows the user to view realtime prices of a user specified list of ticker symbols in the mode line. I pulled this program together in a day because I wanted a way to keep an eye on stock prices while I was developing.',

    stack: ['Emacs Lisp'],
    sourceCode: 'https://github.com/midimaster21b/emacs-stock-tracker',
    livePreview: '',
    // permalink: '/projects/emacs-stock-ticker',
    permalink: '/#projects',
    md_url: '/projects/emacs-stock-ticker/index.md',
  },
  // {
  //   name: 'Deadlock Simulator',
  //   description:
  //   'This was a project for my operating system course in college to visualize and simulate whether a deadlock situation will arise from a sequence of resource acquisition actions. This was also my first React application.',
  //   stack: ['React', 'Javascript'],
  //   sourceCode: 'https://github.com/midimaster21b/Resource-Management-Simulator',
  //   livePreview: 'https://midimaster21b.github.io/Resource-Management-Simulator/',
  //   // livePreview: '/projects/Resource-Management-Simulator',
  //   permalink: '/projects/resource-management-sim',
  //   md_url: '/projects/resource-management-sim/index.md',
  // },
  // {
  //   name: 'Jarvis',
  //   description:
  //   'The goal of this project was to aggregate all common forms of communication into a single interface with all forms of communication integration tied to the real contacts involved. This meant that when you were talking with a friend you could click on their name and see all communication on a timeline involving you and them regardless of communication method. The project name was used because I was using "Jarvis" from Iron Man as a base to model and develop. I implemented support for email, facebook, twitter, SMS, and phone calls. This project includes a web-based frontend using Material styling and an android application for retrieving/archiving phone-based communication.',
  //   stack: ['django', 'python', 'Material', 'Java', 'Android'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/jarvis',
  //   md_url: '/projects/jarvis/index.md',
  // },

  // {
  //   name: 'SPI Slave',
  //   description:
  //   'Developed a VHDL implmentation of a simple SPI slave device.',
  //   stack: ['VHDL', 'Basys3'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/fpga-spi-slave',
  //   md_url: '/projects/fpga-spi-slave/index.md',
  // },
  // {
  //   name: 'Machine Learning',
  //   description:
  //   'Developed machine learning implementations for neural networks, bayesian inference(mixed bag), .',
  //   stack: ['C', 'Neural Networks', 'Machine Learning'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/school/machine-learning-labs',
  //   md_url: '/projects/machine-learning-labs/index.md',
  // },
  // {
  //   name: 'Dot Parser',
  //   description:
  //   'Developed a dot parser for my compilers course',
  //   stack: ['python'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/school/dot-parser',
  //   md_url: '/projects/dot-parser/index.md',
  // },
  // {
  //   name: 'Better Banner',
  //   description:
  //   'Developed a python GUI for viewing and managing courses during course sign-up at GVSU.',
  //   stack: ['python'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/better-banner',
  //   md_url: '/projects/better-banner/index.md',
  // },
  // {
  //   name: 'FPGA Library',
  //   description:
  //   'Developed a library that gathers commonly used FPGA components and modules.',
  //   stack: ['VHDL', 'Verilog'],
  //   sourceCode: '',
  //   livePreview: '',
  //   permalink: '/projects/fpga-library',
  //   md_url: '/projects/fpga-library/index.md',
  // },
]

const blogposts = [
  {
    title: 'Jekyll Revamp',
    date: '2018-10-20',
    body: "This weekend I decided to do a quick revamp of my personal website. Lately, I've had the desire to write up some informational articles about some of the topics I've been learning about in school as well as some of the insights I've gained from project work.",
    stack: ['Jekyll', 'Ruby'],
    permalink: '/blog/jekyll-revamp',
    md_url: '/blogs/2018-10-20-jekyll-revamp/index.md',
  },
  {
    title: 'Jekyll Tutorial',
    date: '2018-10-23',
    body: 'Last weekend I decided to give my outdated personal website an update and ended up trying out Jekyll. I was pleasantly surprised with Jekyll\'s ease of use and integration with Github pages. I figured I\'d pass along my experience to assist anyone else interested in trying out Jekyll with Github pages.',
    stack: ['Jekyll', 'Ruby'],
    permalink: '/blog/jekyll-tutorial',
    md_url: '/blogs/2018-10-23-jekyll-tutorial/index.md',
  },
  {
    title: 'My First React.js App',
    date: '2019-05-30',
    body: "When I was given the opportunity to write an application to simulate the task of resource management in an operating system for my CIS 452: Operating System Concepts course I decided to write my first React application. This was a welcome introduction to the JavaScript web framework.",
    stack: ['React', 'JavaScript'],
    permalink: '/blog/my-first-react-app',
    md_url: '/blogs/2019-05-30-my-first-react-js-app/index.md',
  },
  // {
  //   title: 'Getting Started with GNU Radio Companion',
  //   date: '2019-06-06',
  //   body: "This post covers the Ubuntu installation process and the beginner usage of GNU Radio using GNU Radio Companion for the construction of basic signal flowgraphs.",
  //   stack: ['GNU Radio'],
  //   permalink: '/blog/getting-started-with-grc',
  //   md_url: '/blogs/2019-06-06-getting-started-with-gnu-radio/index.md',
  // },
  {
    title: 'Migrating to Ghost',
    date: '2019-06-07',
    body: "Originally I planned on building my personal website as a web app using the MEAN stack for the experience, but the overhead of building out a whole new CMS just for my personal site would not be worth the time. Instead I decided to use the time to review the tools necessary for development and deployment of modern web services.",
    stack: ['Ghost', 'JavaScript', 'Kubernetes', 'JAMStack'],
    permalink: '/blog/migrating-to-ghost',
    md_url: '/blogs/2019-06-07-migrating-to-ghost/index.md',
  },
  // {
  //   title: 'Modern FPGA Tooling',
  //   date: '2022-10-06',
  //   body: "A modern approach to FPGA tooling.",
  //   stack: ['Python', 'FuseSoC'],
  //   permalink: '/blog/modern-fpga-tooling',
  //   md_url: '/blogs/2022-10-05-modern-fpga-tooling/index.md',
  // },
]


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  // Digital Design
  'VHDL',
  'Verilog',
  'SystemVerilog',
  'Tcl',

  // Scripting
  'Python',
  'Ruby',
  'Emacs Lisp',

  // Embedded/System
  'C',
  'C++',
  'MATLAB',

  // Application
  'Java',
  'C#',

  // Web
  'PHP',
  'SQL',
  'HTML5',
  'CSS3',
  'JavaScript',
]

// Libraries & Frameworks
const libraries = [
  // Web
  'React',
  'Django',
  'Jamstack',
  'Bootstrap',
  'Ruby on rails',
  'Jekyll',
  'NodeJS',
  'Docker',

  // Application
  'pyside',
  'pyqt',
  'OpenGL',
  'glut',
  'OpenCV',
  'OpenMP',

  // FPGA
  'vunit',

]

const applications = [
  // General
  'git',
  'SVN',
  'Make',
  'vi',
  'Emacs',
  'tmux',
  'ftp',
  'ssh',

  // Web
  'CI/CD',
  'Kubernetes',
  'Jenkins',
  'Ghost',
  'Wordpress',

  // Application
  'Test Driven Development',
  'asdf',
  'GNU Radio Companion',

  // FPGA
  'Xilinx Vivado',
  'MicroSemi Libero',
  'Synopsys VCS',
  'QuestaSim',
  'ModelSim',
]

const fpgas = [
  'Xilinx VCK190(Versal)',
  'Digilent Genesys ZU(Zynq UltraScale+)',
  'Avnet Zedboard(Zynq-7000)',
  'Digilent Basys 3(Artix-7)',
  'Digilent PYNQ-Z1(Zynq UltraScale)',
  'MicroSemi RTG4',
  'SQRL FK33(Virtex UltraScale+)',
]

const standards = [
  // ARM AMBA
  'AXI',
  'AXI-Lite',
  'AXI-Stream',
  'APB',

  // General
  'SERDES',
  'SPI',
  'I2C',

  // Ethernet
  'RGMII',
  'XGMII',
  'MDIO',
  'MIPI CSI-2',
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joshedgcombe@gmail.com',
}

export { header, about, projects, blogposts, skills, libraries, applications, fpgas, standards, contact }
