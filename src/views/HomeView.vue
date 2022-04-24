<template>
  <div class="section">
    <div class="ml-3">
      <h1>Welcome</h1>
      <p>Please see this web app's pages.</p>
      <br />
    </div>
    <div>
      <v-row>
        <v-col>
          <v-card :to="'/shortest-path'" class="mx-auto home-card">
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">
                Shortest Path
              </p>
              <p>
                Interact with demonstration and see the shortest path in action.
              </p>
              <!-- <div class="text--primary">INTERACT</div> -->
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary">See Demonstration </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card :to="'/more-algorithms'" class="mx-auto home-card">
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
        <v-col>
          <v-card :to="'/learning-material'" class="mx-auto home-card">
            <v-card-text>
              <br />
              <p class="text-h4 text--primary font-weight-light">
                Learning Material
              </p>
              <p>
                Read about this project and some of the programming concepts
                that were used in this project.
              </p>
              <!-- <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div> -->
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary"> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card href="https://www.murrayobrien.me/" class="mx-auto home-card">
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
              <!-- <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div> -->
            </v-card-text>
            <v-card-actions>
              <v-btn text color="primary "> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import "../../src/assets/scss/home-view.scss";

export default {
  name: "Home-View",
};
</script>
