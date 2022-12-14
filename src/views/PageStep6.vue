<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row">
              <div class="col-md-12">
                <h2>What would you like to buy today ?</h2>
              </div>
            </div>

            <div class="step">
              <div class="row">
                <div class="col-lg-6">
                  <a href="carpet.html">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Carpet</h5>
                        <img src="1.jpeg" />
                      </label>
                    </div>
                  </a>
                  <a href="ottoman.html">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Ottoman</h5>
                        <img src="4.png" />
                      </label>
                    </div>
                  </a>
                </div>
                <div class="col-lg-6">
                  <a href="benches.html">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Benches</h5>
                        <img src="3.png" />
                      </label>
                    </div>
                  </a>
                  <a href="mirror.html">
                    <div class="form-group">
                      <label class="container_check version_2"
                        ><h5 style="text-align: center">Mirror</h5>
                        <img src="2.png" />
                      </label>
                    </div>
                  </a>
                </div>
              </div>
              <!-- /row -->
            </div>
            <!-- /step-->
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
      this.$router.push("/contactform");
    },
  },
};
</script>
