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

            <form id="wrapped" method="post">
              <input id="website" name="website" type="text" value="" />
              <!-- Leave for security protection, read docs for details -->
              <div id="middle-wizard">
                <div class="step">
                  <h3 class="main_question" style="text-align: center">
                    <img src="camera.jpeg" />
                  </h3>
                </div>
              </div>
              <div id="bottom-wizard"></div>
            </form>
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
      name: "IndexPage",
    };
  },
  methods: {
    clickedNext() {
      this.$router.push("/page2");
    },
  },
};
</script>
