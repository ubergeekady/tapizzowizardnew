<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row">
              <div class="col-md-12">
                <h2>Please choose a category</h2>
              </div>
            </div>

            <div class="step">
              <div class="row">
                <div class="col-lg-6">
                  <a @click="clickedCarpet">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Carpet</h5>
                        <img
                          src="productimages/carpet1.jpeg"
                        /><br /><br /><br />
                      </label>
                    </div>
                  </a>
                  <a @click="clickedOttoman">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Ottoman</h5>
                        <img src="productimages/otto1.jpeg" />
                      </label>
                    </div>
                  </a>
                </div>
                <div class="col-lg-6">
                  <a @click="clickedBenches">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Sofa</h5>
                        <img src="productimages/bench1.jpeg" />
                      </label>
                    </div>
                  </a>
                  <a @click="clickedMirror">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Mirror</h5>
                        <img src="productimages/mirror1.jpeg" />
                      </label>
                    </div>
                  </a>
                </div>
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
      name: "IndexPage",
    };
  },
  methods: {
    clickedCarpet() {
      this.$router.push("/productcarpet");
    },

    clickedOttoman() {
      this.$router.push("/productottoman");
    },

    clickedBenches() {
      this.$router.push("/productbench");
    },
    clickedMirror() {
      this.$router.push("/productmirror");
    },
  },
};
</script>
