<template>
  <div class="section">
    <h2 class="font-weight-regular">The Shortest Path Algorithms</h2>
    <br />
    <v-divider width="100%"></v-divider>
    <br />
    <ShortestPathComponent></ShortestPathComponent>
  </div>
</template>

<script>
import ShortestPathComponent from "../components/ShortestPath/ShortestPath.vue";

export default {
  components: { ShortestPathComponent },
  name: "Shortest-Path-View",
};
</script>
