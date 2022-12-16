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
                  Great. Please take this short pictoral quiz for our
                  recommendation engine to find your home decorating style.
                </h1>

                <br /><br />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img src="/roompics/1.webp" alt="" />
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
                    ><img src="/roompics/2.webp" alt="" />
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
                    ><img src="/roompics/3.webp" alt="" />
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

              <div class="col-md-4">
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img src="/roompics/4.webp" alt="" />
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
                    ><img src="/roompics/5.webp" alt="" />
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
                    ><img src="/roompics/6.webp" alt="" />
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

              <div class="col-md-4">
                <div class="form-group">
                  <label class="container_check version_2"
                    ><img src="/roompics/7.webp" alt="" />
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
                    ><img src="/roompics/8.webp" alt="" />
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
      this.$router.push("/step2.1");
    },
  },
};
</script>
