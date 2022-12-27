<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-6">
                <br /><br />
                <h2>
                  Freya says your decorating style is "Mid Century Modern"
                </h2>
                <br />
                <h3>About Your Style</h3>
                Did someone say shiplap ? Classic Americana, comfy fabrics,
                hardworking furnishings, neutral colors and raw materials like
                wood and iron make your space feel like home.
              </div>
              <div class="col-md-6">
                <br />
                <img src="rustic.webp" width="300" height="300" alt="" />

                <br /><br />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
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
      this.$router.push("/step5");
    },
  },
};
</script>
