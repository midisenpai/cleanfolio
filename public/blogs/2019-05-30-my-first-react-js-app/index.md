# My First React App

While I have a decent amount of work in the low level embedded and operating system environments in my portfolio, it's been some time since I have written my last web application. When I was given the opportunity to write an application to simulate the task of resource management in an operating system for my CIS 452: Operating System Concepts course I decided to write my first React application. This was a welcome introduction to the JavaScript web framework.

Following my introduction to Jekyll as a managed static webpage generation utility, I decided to follow along the same path of static hosting for this application using GitHub pages to deploy the application. The deployed progam can be seen by clicking on the link below.

[Resource Management Simulator](https://midimaster21b.github.io/Resource-Management-Simulator)

## Running The Program
The program works by requiring the user to supply a file following the format guidelines below and then allowing them to step through the supplied file's program using the instruction navigation buttons.

1. The first two lines in the file tell the user how many processes and resources will be used for this run.

   **Example:**

   ```code
   5 processes
   3 resources
   ```

   These lines create the processes and resources that will be referenced through the remainder of the file. For the example above, processes will be referenced as p0 through p4 and the resources will be referenced as r0 through r2.

1. The lines following the first two lines fall under the following formats.

   **Example:**

   ```code
   p0 requests r0
   p1 releases r2
   ```

   Where p0 is the zero'th process and r1 is the one'th resource. This notation always follows the format pX {keyword} rY and can be used for any of the processes and resources created in the first two lines of the file.

There are only two keywords available for the program: requests and releases. When the requests keyword is used the process that was specified before the keyword will attempt to gain exclusive access to the resource specified following the keyword. When the requests keyword is used, one of two outcomes will occur:

If the resource is free the process will gain exclusive access to the resource.
If the resource is currently held by another process, the process will be put into a waiting queue until the resource is released by the other process.
The releases keyword can only be used by a process on a resource that it has exclusive access to currently. If the process specified before the keyword does not have exclusive access to the resource an error will occur and an error message will be printed to the console.

### Full Example File:

```code
5 processes
3 resources
p0 requests r0
p1 requests r2
p0 requests r1
p1 requests r1
```

## Design
One of the interesting aspects of this design was the necessity for the program to graphically display the graph showing the relationship between processes and resources. In my program, resources that have been succesfully requested and received are displayed using a green line while resources that were requested and need to be waited for are displayed using a red line.

In addition to drawing the graph as the main focus of the user interface, a list of instructions can be seen on the left hand side of the page representing the instructions in the file supplied by the user. This application was written in JavaScript and intended to be accessible via static hosting so all file handling is done client-side. Once the user selects a file and uploads the file to the program, the user can then step through the instructions that they selected in the program using the navigation buttons below the instruction list.

Since three of the four requirements for deadlock are expected to be true for this program, namely:

1. Mutual exclusion
1. No preemption
1. Hold and wait allocation

The fourth requirement, circular dependence, is the only necessary condition for deadlock to be present. Circular dependence is checked for recursively in the ResourceManager.checkForDeadlock() function.