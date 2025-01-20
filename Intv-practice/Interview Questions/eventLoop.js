//Event Loop : Javascript is synchronous and single threaded programming language but still it is known for its
//             ability to handle asynchrounous tasks efficiently. Single threaded means that it can only 
//            execute one task at a time there is no other way to execute more tasks at a time, so what 
//            javascript basically do -> 
//           -> js uses a callstack to track the currently executed tasks (functions)
//           -> then it has a callback queue, where asynchronous operations such as i/o operations, timers
//              which are executed by browser of node js, when these async operations has completed their
//             execution then their corresponding functions are place inside the callback queue.
//           -> Event loop is used to continuously check the callstack and callback queue whenever the callstack
//              became empty it takes the first function from the callback queue and place it inside the callstack
//              to get executed.
//            -> the functions whihc are present at the top of the callstack will get executed and if they have
//               further any async task to be completed then they placed inside the callback queue after their 
//              execution
//           -> event loop continue this process, ensuring that the callstack should be empty before taking
//              the next function from the callback queue to be executed.