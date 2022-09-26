const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://midimaster21b.github.io/cleanfolio',
  title: 'JE.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joshua Edgcombe',
  role: 'FPGA Engineer',
  description:
  'I\'m currently working at DornerWorks in Grand Rapids, Michigan and have a strong background in software development, digital design, and electrical engineering. I originally learned to program in 2008 and have since learned to develop software in many different programming languages in a variety of environments including web, native, system, and embedded. I received my MSE in computer and electrical engineering in 2021 and have experience with algorithm implmentation and acceleration on FPGAs, GPUs, and DSPs.',
  resume: 'https://example.com',
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

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  // 'HTML',
  // 'CSS',
  // 'JavaScript',
  // 'TypeScript',
  // 'React',
  // 'Redux',
  // 'SASS',
  // 'Material UI',
  // 'Git',
  // 'CI/CD',
  // 'Jest',
  // 'Enzyme',

  // Digital Design
  'VHDL',
  'Verilog',
  'SystemVerilog',
  'Tcl',

  // Scripting
  'Python',
  'Ruby',
  'Emacs Lisp',

  // Embedded
  'C',
  'C++',
  'MATLAB',
  

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joshedgcombe@gmail.com',
}

export { header, about, projects, skills, contact }
