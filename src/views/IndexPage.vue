<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row">
              <div class="col-md-12" style="background-image: url('home.jpeg')">
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h2 style="color: #ffffff">
                  Would you like use our award winning Virtual Decorating
                  Assistant Freya to find what you are looking for?
                </h2>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </div>
            </div>
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />

                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedNext"
                >
                  Yes
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
      name: "PageStep1",
    };
  },
  methods: {
    clickedNext() {
      this.$router.push("/step2");
    },
  },
};
</script>
