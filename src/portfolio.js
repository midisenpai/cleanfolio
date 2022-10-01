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
  'I currently work at DornerWorks in Grand Rapids, Michigan and have a strong background in software development, digital design, and electrical engineering. I learned to program in 2008 and have since learned to write software in many different programming languages in a variety of environments including web, mobile, native, system, and embedded. I received my MSE in computer and electrical engineering in 2021 where I gained experience implementing and accelerating algorithms on FPGAs, GPUs, and DSPs. Since graduation I have been lucky enough to design, develop, and test a core component of the world\'s first deep-space radiation-hardened ethernet switch that will be used in a mission-critical capacity for the Artemis missions. I\'ve also been able to significantly contribute to a constellation of satellites that will soon be competing with Starlink, as well as a few defense related projects.',
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
    name: 'Hardware Acceleration in Image Stitching: GPU vs FPGA',
    description:
//      'A comparison of hardware accelerated image stitching solutions.',
      'Implemented a full image processing pipeline from scratch that included feature detection, feature matching, image transformation, and image stitching portions. This pipeline was accelerated on an FPGA and a GPU separately for performance comparison.',
    stack: ['C', 'C++', 'Cuda', 'OpenCV', 'VHDL', 'Verilog', 'Python', 'Tcl', 'SURF', 'FPGA', 'GPU'],
    sourceCode: '',
    livePreview: 'https://scholarworks.gvsu.edu/theses/1018/',
  },
  {
    name: 'Implementing Analog and Digital Transceivers',
    description:
    'Implemented analog and digital communication transceivers using software-defined radios and GNU Radio Companion. Custom blocks were created to support the implementation of modulation and demodulation of AM, FM, FSK, PSK, and QAM signals. This included a dive into the theory behind several options for clock and data recovery.',
    stack: ['C', 'Python', 'GNU Radio', 'Software-Defined Radio'],
    sourceCode: '',
    livePreview: 'https://peer.asee.org/implementation-of-analog-and-digital-communications-transceivers-on-sdr-platforms-using-gnu-radio-companion',
  },
  {
    name: 'Ti MSP432 Peripheral Driver Library',
    description:
      'Developed a peripheral driver library for the Ti MSP432 microcontroller to gain experience interacting with peripherals.',
    stack: ['C', 'MSP432'],
    sourceCode: 'https://github.com/midimaster21b/MSP432_DriverLibrary',
    livePreview: '',
  },
  {
    name: 'Emacs Stock Ticker',
    description:
    'When I initially got into stock trading in 2016 I wanted a way to watch the stocks I was interested in while I was developing at work. I also wanted a project to help me dive into Emacs lisp. The result was this major mode that displays a ticker symbol and it\'s current price in the mode line.',
    stack: ['Emacs Lisp'],
    sourceCode: 'https://github.com/midimaster21b/emacs-stock-tracker',
    livePreview: '',
  },
  {
    name: 'Resource Management Simulator',
    description:
    'This was a project for my operating system course in college to visualize and simulate whether a deadlock situation will arise from a sequence of resource acquisition actions. This was also my first React application.',
    stack: ['React', 'Javascript'],
    sourceCode: 'https://github.com/midimaster21b/Resource-Management-Simulator',
    livePreview: '/projects/Resource-Management-Simulator',
  },
  {
    name: 'Jarvis',
    description:
    'The goal of this project was to aggregate all common forms of communication into a single interface with all forms of communication integration tied to the real contacts involved. This meant that when you were talking with a friend you could click on their name and see all communication on a timeline involving you and them regardless of communication method. The project name was used because I was using "Jarvis" from Iron Man as a base to model and develop. I implemented support for email, facebook, twitter, SMS, and phone calls. This project includes a web-based frontend using Material styling and an android application for retrieving/archiving phone-based communication.',
    stack: ['django', 'python', 'Material', 'Java', 'Android'],
    sourceCode: '',
    livePreview: '',
  },
]

const blogposts = [
  {
    title: 'Jekyll Tutorial',
    date: '2018-10-23',
    body: 'A Jekyll Tutorial',
    stack: ['Jekyll'],
    permalink: '/blog/jekyll-tutorial',
    md_url: '/blogs/2018-10-23-jekyll-tutorial/index.md',
  },
  {
    title: 'Jekyll Revamp',
    date: '2018-10-20',
    body: "This is a test.",
    stack: ['Jekyll'],
    permalink: '/blog/jekyll-revamp',
    md_url: '/blogs/2018-10-20-jekyll-revamp/index.md',
  },
  {
    title: 'My First React.js App',
    date: '2019-05-30',
    body: "This is a test.",
    stack: ['React'],
    permalink: '/blog/my-first-react-app',
    md_url: '/blogs/2019-05-30-my-first-react-js-app/index.md',
  },
  {
    title: 'Getting Started with GNU Radio Companion',
    date: '2019-06-06',
    body: "This is a test.",
    stack: ['GNU Radio'],
    permalink: '/blog/getting-started-with-grc',
    md_url: '/blogs/2019-06-06-getting-started-with-gnu-radio/index.md',
  },
  {
    title: 'Migrating to Ghost',
    date: '2019-06-07',
    body: "This is a test.",
    stack: ['Ghost'],
    permalink: '/blog/migrating-to-ghost',
    md_url: '/blogs/2019-06-07-migrating-to-ghost/index.md',
  },
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
