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
                <img src="productimages/carpet1.jpeg" alt="" />
                <h3>Dapple Flint</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/carpet2.jpeg" alt="" />
                <h3>Restrict Flit</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/carpet3.jpeg" alt="" />
                <h3>Carnival</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <img src="productimages/carpet4.jpeg" alt="" />
                <h3>Channels Indigo</h3>
              </div>
              <div class="col-md-4">
                <img src="productimages/carpet5.jpeg" alt="" />
                <h3>Anemeone</h3>
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
      products: [
        {
          id: 0,
          image: "productimages/carpet1.jpeg",
          description: `
        1Seemingly erased in random patterns, colors merge and diverge across the surface of Raku, an artful abstraction enhanced by the mix of matte wool and lustrous viscose. Artisans hand shear the yarns to three heights, creating a topography of tone and texture.

        #homedecor #interiordesign #home #interior #decor #design #homedesign #handmade #homesweethome #art #decoration #furniture #architecture #interiors #homedecoration #love #interiordecor #interiordesigner #vintage #interiorstyling #livingroom #luxury #homestyle #instagood #homeinspo #walldecor #diy #inspiration #smallbusiness #style
        `,
        },
        {
          id: 1,
          image: "productimages/carpet2.jpeg",
          description: `
        2Seemingly erased in random patterns, colors merge and diverge across the surface of Raku, an artful abstraction enhanced by the mix of matte wool and lustrous viscose. Artisans hand shear the yarns to three heights, creating a topography of tone and texture.

        #homedecor #interiordesign #home #interior #decor #design #homedesign #handmade #homesweethome #art #decoration #furniture #architecture #interiors #homedecoration #love #interiordecor #interiordesigner #vintage #interiorstyling #livingroom #luxury #homestyle #instagood #homeinspo #walldecor #diy #inspiration #smallbusiness #style
        `,
        },
        {
          id: 2,
          image: "productimages/carpet3.jpeg",
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
