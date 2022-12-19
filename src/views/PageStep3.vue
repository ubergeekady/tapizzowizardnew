<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />
                <h1>Which room should we focus on first ?</h1>

                <br /><br />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="container_radio version_2"
                    >Living Room
                    <input
                      type="radio"
                      name="question_2"
                      value="Yes"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Dining Room
                    <input
                      type="radio"
                      name="question_2"
                      value="No"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Kitchen
                    <input
                      type="radio"
                      name="question_2"
                      value="No"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Office
                    <input
                      type="radio"
                      name="question_2"
                      value="No"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Reading Room
                    <input
                      type="radio"
                      name="question_2"
                      value="No"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <br />

                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedNext"
                >
                  Next
                </button>
              </div>
            </div>
            <!-- /row -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "PageStep2",
    };
  },
  methods: {
    clickedNext() {
      this.$router.push("/step5");
    },
  },
};
</script>
