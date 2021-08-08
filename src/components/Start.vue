<template>
  <v-container>
    <v-card>
      <v-card-title class="indigo white--text text-h4">
        Please read this bit
      </v-card-title>
      <v-row>
        <v-col>
          <v-card-text class="text-subtitle-1">
            First and foremost, this is a habit planner, not a tracker. We'll
            get to tracking soon.
          </v-card-text>
          <v-card-text class="text-subtitle-1">
            Planning our lives for success is not easy, this process takes time
            and possibly multiple iterations.
          </v-card-text>
          <v-card-text class="text-subtitle-1">
            We do believe in privacy so we do not save/sell your data, we do not
            set cookies, there's no login, no annoying emails, everything
            happens in your browser. Data will not be lost between restarts,
            only if you reinstall your browser. Have no fear, we plan to
            implement a way for you to either save locally, print your data in a
            nice way, or load a saved file.
          </v-card-text>
          <v-card-text class="text-subtitle-1">
            Clicking on a question mark
            <v-icon small color="primary">mdi-help</v-icon> will allow you to
            get more in-depth information. Doing so is not required but
            definitely recommended, you might find some useful examples. We will
            try to be as succint as possible.
          </v-card-text>
          <v-card-text class="text-subtitle-1">
            Congrats, you really read all of it, first task completed! Let's
            start with our current Behavior.
          </v-card-text>
          <v-row>
            <v-col md="1" offset-md="10">
              <v-btn color="success" @click="$emit('nextStep', 'Behavior')"
                >next</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.v-card__text
  padding: 10px 20px
  font-size: 1rem
  font-weight: 400
  line-height: 1.375rem
  letter-spacing: 0.003em
  color: rgba(0,0,0,0.7)!important
</style>
