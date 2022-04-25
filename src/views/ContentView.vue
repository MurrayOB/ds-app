<template>
  <div>
    <!-- :permanent="!$vuetify.breakpoint.xsOnly" -->
    <!-- <v-navigation-drawer permanent left width="500" height="100vh">
      <v-list-item class="mt-4">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Learning Material
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list class="mt-4" nav dense>
        <v-list-item
          active-class="primary--text text--accent-4"
          v-for="item in items"
          :key="item.title"
          :to="'#test'"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <div class="section">
      <v-card elevation="2" class="pl-4 pt-2 pb-2">
        <h3>Sorting Algorithms</h3>
      </v-card>
      <br />
      <p>Two categories:</p>
      <ul>
        <li>1. Sequential Search (e.g. Linear Search)</li>
        <li>
          2. Interval Search (for seaching in sorted data-structures, more
          efficient than sequential e.g. Binary Search)
        </li>
      </ul>
      <br />
      <v-card elevation="2" class="pl-4 pt-2 pb-2">
        <h3>Searching Algorithms</h3>
      </v-card>
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
        collect a package or item who had sensors and understood that the
        objects the robot didnt want to interact with responded with 1.
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
        Basically arrays except first in first out. We do this by pushing to
        array and then using array.shift();
      </p>
      <h4>How a bindary tree is represented vs a graph tree in javascript:</h4>
      <p>Tree</p>
      <pre>
             10                           
            /  \                          
           4    17                        [10, 4, 17, 1, 9, 12, 18]
          / \   / \                       
         1   9 12  18 
        </pre
      >
      <br />
      <v-card elevation="2" class="pl-4 pt-2 pb-2">
        <h3>Thoughts</h3>
      </v-card>
      <br />
      <p>
        1. When doing my research and reminding myself of binary trees, I found
        it always made sense to visualize it through the classic tree diagram
        but that would never truly tell me what it was. Instead I found clarity
        in knowing how it could be represented in terms of an object or array
        which seemed to make more sense to me.
      </p>
      <p>
        2. The Depth First and Breadth First algoirthms for exmaple need to have
        obsticales inside of them, they shouldn't be used for searching for a
        value deep in an array. A simple for loop would be better.
      </p>
      <ul>
        <li>
          Shape of the array for example my array looked like this: [[0, 0], [0,
          1]] but it could have also looked like this? :
          [[1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]]
        </li>
        <li>Want to find the quickest way</li>
        <li>Give the location of package to AI?</li>
        <li>Is the size of the map known to the ai? (unknown array size)</li>
        <li>How many ways are there to search an array, names and speed</li>
      </ul>
      <br />
      <h4>What inspired this project?</h4>
      <p>
        I wanted to code something that felt it had practicality and to move
        away from the mundane front end tasks Im used to.
      </p>
      <br />
      <h4>Journal</h4>
      <p>
        In my mind I had an idea on what I'd do and the front end was built
        swiftly until it came time to implement the searching algorithms. I
        didn't want to remind myself so I challenged to come up with it myself.
      </p>
      <v-card elevation="2" class="pl-4 pt-2 pb-2">
        <h3>Code Snippets</h3>
      </v-card>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Content-View",
  data() {
    return {
      items: [
        { title: "Home" },
        { title: "My Account" },
        { title: "Users" },
        { title: "Code Snippets" },
      ],
    };
  },
};
</script>
