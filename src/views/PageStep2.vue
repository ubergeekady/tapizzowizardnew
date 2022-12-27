<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />
                <h1>
                  Great. Please take this short pictoral quiz for Freya to find
                  your home decorating style. Please click on one or more images
                  below which appeal to you more than the rest.
                </h1>

                <br /><br />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img
                      width="300"
                      height="300"
                      src="/roompicsnew/1.jpeg"
                      alt=""
                    />
                    <input
                      type="checkbox"
                      name="question_1[]"
                      value="China"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img
                      width="300"
                      height="300"
                      src="/roompicsnew/2.jpeg"
                      alt=""
                    />
                    <input
                      type="checkbox"
                      name="question_1[]"
                      value="China"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img
                      width="300"
                      height="300"
                      src="/roompicsnew/3.jpeg"
                      alt=""
                    />
                    <input
                      type="checkbox"
                      name="question_1[]"
                      value="China"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img
                      width="300"
                      height="300"
                      src="/roompicsnew/4.jpeg"
                      alt=""
                    />
                    <input
                      type="checkbox"
                      name="question_1[]"
                      value="China"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img
                      width="300"
                      height="300"
                      src="/roompicsnew/5.jpeg"
                      alt=""
                    />
                    <input
                      type="checkbox"
                      name="question_1[]"
                      value="China"
                      class="required"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <br /><br />

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
      this.$router.push("/step5.1");
    },
  },
};
</script>
