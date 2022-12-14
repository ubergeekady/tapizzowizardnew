<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />
                <h1>What kind of home do you live in ?</h1>

                <br /><br />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="container_radio version_2"
                    >House
                    <input
                      type="radio"
                      name="question_2"
                      value="Yes"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Townhouse
                    <input
                      type="radio"
                      name="question_2"
                      value="No"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="container_radio version_2"
                    >Apartment
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
