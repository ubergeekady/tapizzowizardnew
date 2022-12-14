<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div id="top-wizard">
              <div id="progressbar"></div>
              <span id="location"></span>
            </div>

            <!-- /top-wizard -->
            <form id="wrapped" method="post">
              <input id="website" name="website" type="text" value="" />
              <!-- Leave for security protection, read docs for details -->
              <div id="middle-wizard">
                <div class="step">
                  <h3 class="main_question" style="text-align: center">
                    <i class="arrow_right"></i>When Should We Contact You
                  </h3>
                  <div class="form-group add_top_30">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Date"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Time"
                      class="form-control"
                    />
                  </div>
                  <div class="row"></div>
                  <!-- /row-->
                </div>
                <!-- /step-->
              </div>
              <!-- /middle-wizard -->
              <div id="bottom-wizard"></div>
              <button
                type="button"
                name="for"
                class="forward"
                @click="clickedSubmitButton"
              >
                Submit
              </button>
            </form>
          </div>
          <!-- /Wizard container -->
        </div>
      </div>
      <!-- /Row -->
    </div>
    <!-- /Form_container -->
  </div>
  <!-- /container -->
</template>

<script>
export default {
  data() {
    return {
      name: "IndexPage",
    };
  },
  methods: {
    clickedSubmitButton() {
      this.$router.push("/talktoanexpert1");
    },
  },
};
</script>
