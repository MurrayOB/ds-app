<template>
  <div class="section">
    <div class="ml-3">
      <h1>Welcome</h1>
      <p>
        View shortest path algorithm, other algorithms, some learning material
        and my personal page.
      </p>
      <br />
    </div>
    <div>
      <v-row>
        <!-- SHORTEST PATHH -->
        <v-col>
          <v-card outlined :to="'/shortest-path'" class="mx-auto home-card">
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">
                Shortest Path
              </p>
              <p>Interact with demo and see the shortest path in action.</p>
              <!-- <div class="text--primary">INTERACT</div> -->
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary">See Demonstration </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- MORE ALGORITHMS -->
        <v-col>
          <v-card outlined :to="'/more-algorithms'" class="mx-auto home-card">
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">
                More Algorithms
              </p>
              <p>Interact with more algorithms such as ...</p>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary"> See Demonstration </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <!-- LEARNING MATERIAL -->
        <v-col>
          <v-card outlined :to="'/learning-material'" class="mx-auto home-card">
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">
                Learning Material
              </p>
              <p>
                Read about this project and some of the programming concepts
                that were used in this project.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary"> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- ABOUT ME -->
        <v-col>
          <v-card
            outlined
            href="https://www.murrayobrien.me/"
            class="mx-auto home-card"
          >
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">About Me</p>
              <p>See more about me on my personal site.</p>
              <v-row align-content="start">
                <v-col>
                  <v-hover v-slot="{ hover }">
                    <v-card
                      href="https://www.linkedin.com/in/murray-o-brien-ab1454206"
                      class="pl-2"
                      :elevation="hover ? '2' : '0'"
                    >
                      Linkedin:
                      <v-icon class="pr-4" color="blue">mdi-linkedin</v-icon>
                    </v-card>
                  </v-hover>
                </v-col>
                <v-col>
                  About me: <v-icon color="primary">mdi-text-box</v-icon>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary "> See page </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
//import "../../src/assets/scss/home-view.scss";

export default {
  name: "Home-View",
};
</script>
