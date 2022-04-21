<template>
  <div class="section">
    <h2>Resources:</h2>
    <h4>Phase 1.</h4>
    <h5>Searching Algorithms</h5>
    <p>Two categories:</p>
    <ul>
      <li>1. Sequential Search (e.g. Linear Search)</li>
      <li>
        2. Interval Search (for seaching in sorted data-structures, more
        efficient than sequential e.g. Binary Search)
      </li>
    </ul>
    <br />
    <h4>Phase 2.</h4>
    <h5>Shortest Path Algorithms (Graph Traversal Algorithms)</h5>
    <ul>
      <li>1. Depth First Search</li>
      <li>
        2. Breadth First Search (Search connected edges before moving on to
        search the connected vertices edges. )
      </li>
    </ul>
    <br />
    <p>
      The look of the array (2D array): 0's represent a path, 1's represent a
      wall and 2 is the destination.
    </p>
    <p>
      [[1,1,1,1,1,1], <br />
      [1, 0, 0, 0, 0, 1]]
      <br />...
    </p>
    <p>
      The entire time creating this, instead of thinking of it as the classic
      car driving map example, I was rather imagining it as a robot trying to
      collect a package or item who had sensors and understood that the objects
      the robot didnt want to interact with responded with 1.
    </p>
    <h4>Other Research:</h4>
    <p>Binary Tree (Data Structure, each node has most 2 children)</p>
    <h4>
      Need to build a Graph Tree so you can move in more than 2 directions
      (left, right, up, down):
    </h4>
    <p>Binary Tree (Data Structure, each node has most 2 children)</p>
    <h3>Recursion:</h3>
    <p>...</p>
    <h3>Queues:</h3>
    <p>
      Basically arrays except first in first out. We do this by pushing to array
      and then using array.shift();
    </p>
    <h4>How a bindary tree is represented vs a graph tree in javascript:</h4>
    <p>Tree</p>
    <pre>
     10
    /  \
   4    17
  / \   / \
 1   9 12  18 </pre
    >
    <h3>Thoughts:</h3>
    <p>
      1. When doing my research and reminding myself of binary trees, I found it
      always made sense to visualize it through the classic tree diagram but
      that would never truly tell me what it was. Instead I found clarity in
      knowing how it could be represented in terms of an object or array which
      seemed to make more sense to me.
    </p>
  </div>
</template>

<script>
export default {
  name: "Content-View",
};
</script>
