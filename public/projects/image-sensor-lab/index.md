# Image Sensor Lab

The objective of this project was to develop a final lab for undergraduate students in an introductory FPGA course.
The goal of this lab was to connect an image sensor to the FPGA and output the images received from the image sensor out a VGA connector.
In order to develop this lab, I had to work through initialization of the image sensor, develop the architecture for the image data path, and
develop a working prototype of the finished lab. Once I had completed the project, the portions of the project that could reasonably be accomplished
by students in the course was removed from the project and a lab assignment was written.

Since the output format of the image sensor was an 8-bit bus, the PMOD connectors on the FPGA were meant to be used for the connection.
In order to reduce the difficulty in connecting the camera to the pmod connectors I designed a 2-layer PCB that could easily be used.
Additionally, for configuration of the image sensor a module was developed to communicate using the SCCB communication standard outlined
by the image sensor manufacturer.

Equipment:
- Digilent Basys3 (Artix-7)
- OV7670 Image Sensor