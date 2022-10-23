# Intro to UVM

## Main UVM Components

### Scoreboard

The scoreboard is responsible for verifying that the DUT is behaving as expected
using the behavior at the DUT interfaces and sometimes signals within the DUT.
The scoreboard is also responsible for reporting the successful and unsuccessful
behavior of the DUT. This can include the DUT reporting invalid values as valid,
incorrectly handling interface transactions, and even incorrect state
transitions.

The scoreboard should contain the reference model for the DUT. The reference
model is responsible for emulating the expected behavior of the DUT without the
requirement of being synthesizable code. Using the reference model inside the
scoreboard, transaction level objects created during interface events, and
signals from within the DUT the scoreboard can log errors for any issues found
while the testbench is running.

### Environment

An environment is an object that provides consistent hierarchy for verification
components. The objective of environments is to provide reusable configurations
of verification components between testbenches. Traditionally the top
environment available in a testbench holds the stimulus and checker portions of
a traditional test harness.

Environments can contain other environments as well. This is particularly useful
when there is some configuration associated with a verification component for
certain tests.


### Agent

An agent is essentially a logical representation of all the verification IP
associated with a particular interface excluding the transactions to be supplied
to the interface. The agent typically contains a single driver used to drive all
the signals associated with the interface, the monitor


### Monitor

The monitor uses a virtual interface to monitor the signals associated with the
interface. When any new transacation is recognized by the monitor on the
interface, it is captured into a packet and sent to the scoreboard using a
mailbox. These transactions include transactions generated or initiated by
either the current agent's driver or the DUT.




### Driver

The driver is responsible for driving a set of signals associated with an
interface that is connected to the DUT. Each logical interface associated with
the DUT will receive it's own driver. Examples of common drivers are SPI, I2C,
AXI, AXIS, and PCIe. While the driver class is responsible for determining
exactly what the signal values are for each signal in it's represented interface
are at any point in time(it's responsible for protocol level signal values),
the driver class is not responsible for generating data to be sent through the
interface. The data sent through the interface is managed and supplied using
sequences.


### Sequences

Sequences are the transaction level method of relaying the data and transaction
types that are required for a test to the driver class responsible for driving
the actual signals for the interface. UVM provides three classes to construct
and convey sequences to be effectively used by the driver class. The three
classes that UVM provides for sequences are `Sequence Item`, `Sequence`, and
`Sequencer`.

#### Sequence Item

Sequence items contain the smallest necessary amount of information for a
transaction on the intreface associated with this class to be performed. This
may include transaction type, data, address, channel, or any other information
specific to the protocol associated with the targeted interface.

#### Sequence

The sequence class is an ordered grouping of sequence items to be supplied to
the interface. This class is similar to the stimulus ordering of a traditional
testbench. This is the data that will be supplied to the DUT over the associated
interface.

#### Sequencer

The sequencer is responsible for supplying the sequence data to the driver which
will manage the individual signals associated with the interface protocol to
realize the transaction or transactions required to fulfill the sequence items
in the supplied sequence.


#### Virtual Sequencer

The virtual sequencer is a fourth sequence class that allows sequencers to be
grouped together and utilized from a single source file more easily.



## UVM Phases

### Run Phase

This is the only phase which utilizes a task rather than a function. Tasks allow
time to pass(e.g. the simulation is running) while functions do not allow
simulation time to pass.

The Run Phase exits in one of two ways:

1. All run_phase objections are dropped

  It is the responsibility of at least one of the UVM components associated with
  the testbench to raise an objection immediately upon entering the run_phase.
  If none of the components raise an objection before the first simulation tick
  has passed, the simulation will immediately exit the run phase. Oftentimes it
  is the responsibility of the component inheriting from `uvm_test` (being
  responsible for the high level control and functioning of the testbench) to
  raise an objection as it's first function call `phase.raise_objection(this);`
  and drop the objection as it's last function call `phase.drop_objection(this);`.

1. Timeout occurs

   The other method for exiting the run_phase is when simulation timeout occurs.
   The default value of timeout is set to 9200 seconds, but can be set using the
   `uvm_root::set_timeout` function. If this phase is exited due to timeout, a
   FATAL error is raised.

## How to Write Test Cases


## How to Write BFMs


## FuseSoC Integration
