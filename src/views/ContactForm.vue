<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row">
              <div class="col-md-4">HH</div>
              <div class="col-md-4">HH</div>
              <div class="col-md-4">HH</div>
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
      name: "IndexPage",
    };
  },
  methods: {
    clickedSubmitButton() {
      this.$router.push("/page2");
    },
  },
};
</script>
