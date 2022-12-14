<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-4" style="height: 180px">
          <div id="left_form">
            <img :src="products[currentProduct].image" />
          </div>
        </div>
        <div class="col-lg-8">
          <div id="wizard_container">
            <div id="top-wizard">
              <div id="progressbar"></div>
              <span id="location"></span>
            </div>

            <!-- /top-wizard -->
            <form id="wrapped" method="post">
              <input id="website" name="website" type="text" value="" />
              <!-- Leave for security protection, read docs for details -->
              <div id="middle-wizard">
                <div class="step">
                  <div class="row" style="">
                    <h3 class="main_question">
                      <strong
                        >Based on your preferences, here are some carpet options
                        tailor made for you.
                      </strong>
                    </h3>

                    <h3 class="main_question">
                      <span id="spanDescription">
                        {{ products[currentProduct].description }}
                      </span>
                    </h3>

                    <div id="social">
                      <a href="#0"><i class="icon-facebook"></i></a>
                      <a href="#0"><i class="icon-twitter"></i></a>
                      <a href="#0"><i class="icon-google"></i></a>
                      <a href="#0"><i class="icon-linkedin"></i></a>
                    </div>

                    <br /><br />
                  </div>
                  <!-- /row-->
                </div>
                <!-- /step-->
              </div>
              <!-- /middle-wizard -->
              <div id="bottom-wizard">
                <div style="text-justify: center">
                  <img src="left.png" @click="clickedLeft()" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="right.png" @click="clickedRight()" />
                </div>
                <br />
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
              <!-- /bottom-wizard -->
            </form>
          </div>
          <!-- /Wizard container -->
        </div>
      </div>
      <!-- /Row -->
    </div>
    <!-- /Form_container -->
  </div>
  <!-- /container -->
</template>

<script>
export default {
  data() {
    return {
      currentProduct: 0,
      products: [
        {
          id: 0,
          image: "productimages/bench1.png",
          description: `
        1Seemingly erased in random patterns, colors merge and diverge across the surface of Raku, an artful abstraction enhanced by the mix of matte wool and lustrous viscose. Artisans hand shear the yarns to three heights, creating a topography of tone and texture.

        #homedecor #interiordesign #home #interior #decor #design #homedesign #handmade #homesweethome #art #decoration #furniture #architecture #interiors #homedecoration #love #interiordecor #interiordesigner #vintage #interiorstyling #livingroom #luxury #homestyle #instagood #homeinspo #walldecor #diy #inspiration #smallbusiness #style
        `,
        },
        {
          id: 1,
          image: "productimages/bench2.png",
          description: `
        2Seemingly erased in random patterns, colors merge and diverge across the surface of Raku, an artful abstraction enhanced by the mix of matte wool and lustrous viscose. Artisans hand shear the yarns to three heights, creating a topography of tone and texture.

        #homedecor #interiordesign #home #interior #decor #design #homedesign #handmade #homesweethome #art #decoration #furniture #architecture #interiors #homedecoration #love #interiordecor #interiordesigner #vintage #interiorstyling #livingroom #luxury #homestyle #instagood #homeinspo #walldecor #diy #inspiration #smallbusiness #style
        `,
        },
        {
          id: 2,
          image: "productimages/bench3.png",
          description: `
        3Seemingly erased in random patterns, colors merge and diverge across the surface of Raku, an artful abstraction enhanced by the mix of matte wool and lustrous viscose. Artisans hand shear the yarns to three heights, creating a topography of tone and texture.

        #homedecor #interiordesign #home #interior #decor #design #homedesign #handmade #homesweethome #art #decoration #furniture #architecture #interiors #homedecoration #love #interiordecor #interiordesigner #vintage #interiorstyling #livingroom #luxury #homestyle #instagood #homeinspo #walldecor #diy #inspiration #smallbusiness #style
        `,
        },
      ],
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
