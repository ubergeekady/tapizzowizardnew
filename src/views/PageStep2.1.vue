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
                  For exact recommendations, please upload the image of the room
                  you intend to decorate.
                </h1>
                <br />
                <img src="camera.jpeg" alt="" />

                <br /><br />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="form-group"></div>
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
      this.$router.push("/step3");
    },
  },
};
</script>
