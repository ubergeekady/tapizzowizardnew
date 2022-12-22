<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12"></div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <img src="productimages/bench1.jpeg" alt="" />
                <h3>Cortona Sofa</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/bench2.jpeg" alt="" />
                <h3>Sculddurl Sofa</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/bench3.jpeg" alt="" />
                <h3>Matteo Sofa</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/bench4.jpeg" alt="" />
                <h3>Copenhagen Sofa</h3>
              </div>
            </div>

            <br /><br />

            <div class="row">
              <div class="col-lg-12">
                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedTryButton"
                >
                  Try It In Your Room
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedTalkButton"
                >
                  Talk To An Expert
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedBuyButton"
                >
                  Buy It Now
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
      currentProduct: 0,
    };
  },
  methods: {
    clickedLeft() {
      if (this.currentProduct > 0)
        this.currentProduct = this.currentProduct - 1;
    },
    clickedRight() {
      if (this.currentProduct < 2)
        this.currentProduct = this.currentProduct + 1;
    },

    clickedTryButton() {
      this.$router.push("/tryitinyourroom");
    },

    clickedBuyButton() {
      this.$router.push("/buyitnow");
    },

    clickedTalkButton() {
      this.$router.push("/talktoanexpert");
    },
  },
};
</script>
