<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />
                <h1>Select five rooms that make you swoon.</h1>

                <br /><br />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img src="/roompics/1.webp" alt="" /><br /><br />
                <img src="/roompics/2.webp" alt="" /><br /><br />
                <img src="/roompics/3.webp" alt="" /><br /><br />
              </div>
              <div class="col-md-4">
                <img src="/roompics/4.webp" alt="" /><br /><br />
                <img src="/roompics/5.webp" alt="" /><br /><br />
                <img src="/roompics/6.webp" alt="" /><br /><br />
              </div>
              <div class="col-md-4">
                <img src="/roompics/7.webp" alt="" /><br /><br />
                <img src="/roompics/8.webp" alt="" /><br /><br />
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
      this.$router.push("/contactform");
    },
  },
};
</script>
