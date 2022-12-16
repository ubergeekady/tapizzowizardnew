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
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.roomvo.com/my/euro_multiproduct_demo/rooms/4bee46c2296c4c52b38e7ae40473a1c3?product_type=2&per_product_type_prefilter=%7B%222%22%3A%7B%22general_tag__in%22%3A%5B%22Luminaire%22%5D%7D%2C+%224%22%3A%7B%22general_tag__in%22%3A%5B%22Luminaire%22%5D%7D%2C+%225%22%3A%7B%22general_tag__in%22%3A%5B%22Luminaire%22%5D%7D%2C+%226%22%3A%7B%22general_tag__in%22%3A%5B%22Luminaire%22%5D%7D%7D"
                    />
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
