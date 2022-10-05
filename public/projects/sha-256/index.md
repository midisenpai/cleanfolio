# SHA-256 Implementation

In graduate school I took a course focused on cryptography and the implementation of cryptography algorithms on FPGAs.
For this course I developed an implementation of the SHA-256 algorithm.
I chose the SHA-256 algorithm because of it's use within modern cryptocurrencies.
This provided an option for me to get into FPGA accelerated bitcoin mining and learn a bit about the theory behind it.
With that being said, it didn't take much investigation to realize that fpga mining in bitcoin(or other SHA-256 based algorithms)
was not viable due to the high availability of SHA-256 ASIC miners.

While I was not able to significantly affect the bitcoin mining market, the implementation of the SHA-256 algorithm in verilog
introduced me to the implementation and acceleration of algorithms using FPGAs. This project included a requirement to test
the developed SHA-256 core using a softcore MicroBlaze cpu on the development board in addition to writing a testbench for
verification of the core's functionality.