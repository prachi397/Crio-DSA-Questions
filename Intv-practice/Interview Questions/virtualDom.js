//Virtual DOM : DOM is nothing but a tree like structure of HTML elements, but manipulating the real DOM is
//              a time consuming task and it can lead to performance issues as whenever a small change happen
//              in out component then the entire dom will get rerender to update the change part, which is 
//              inefficient. So react uses virtual DOM, which is nothing but a light weight representation of
//              real dom, instead of updating the real dom directly react uses virtual dom to efficiently update
//              the changes. whenever a component state or props changes then react creates a new virtual dom
//              and then it compares the newly created virtual dom with the previous one using the algorithm 
//              known as diffing algorithm and identify the changes that has been done and then efficiently
//              update only the changed part into the real dom. This process is known as recoincilation. React
//              smartly bacthes all the changes and updates them in real dom to minimize the component rerending
//              which improves the performance of react application.