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
    <h5>Shortest Path Algorithms</h5>
    <ul>
      <li>1. Depth First Search</li>
      <li>2. Breadth First Search</li>
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
  </div>
</template>

<script>
export default {
  name: "Content-View",
};
</script>
