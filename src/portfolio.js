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
  'I currently work at DornerWorks in Grand Rapids, Michigan and have a strong background in software development, digital design, and electrical engineering. I learned to program in 2008 and have since learned to write software in many different programming languages in a variety of environments including web, native, system, and embedded. I received my MSE in computer and electrical engineering in 2021 where I gained experience implementing and accelerating algorithms on FPGAs, GPUs, and DSPs. Since graduation I have been lucky enough to design, develop, and test a core component of the world\'s first deep-space radiation-hardened ethernet switch that will be used in a mission-critical capacity for the Artemis missions. I\'ve also been able to significantly contribute to a constellation of satellites that will soon be competing with Starlink, as well as a few defense related projects.',
  resume: 'https://github.com/midimaster21b/cleanfolio/raw/main/public/JoshuaEdgcombeResume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/joshuaedgcombe/',
    github: 'https://github.com/midimaster21b',
    youtube: 'https://www.youtube.com/c/JoshEdgcombe',
    twitter: 'https://twitter.com/midimaster21b',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
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
]

const blogposts = [
  {
    title: 'Hardware Acceleration in Image Stitching: GPU vs FPGA',
    body:
      'Implemented a full image processing pipeline from scratch that included feature detection, feature matching, image transformation, and image stitching portions. This pipeline was accelerated on an FPGA and a GPU separately for performance comparison.',
    stack: ['C', 'C++', 'Cuda', 'OpenCV', 'VHDL', 'Verilog', 'Python', 'Tcl', 'SURF', 'FPGA', 'GPU'],
    permalink: '/blog/',
  },
  {
    title: 'Migration To Ghost',
    date: '2019-06-07',
    body: "This is a test.",
    stack: ['C', 'C++', 'Cuda', 'OpenCV', 'VHDL', 'Verilog', 'Python', 'Tcl', 'SURF', 'FPGA', 'GPU'],
    permalink: '/blog/',
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
