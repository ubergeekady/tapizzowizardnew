<template>
  <div class="container">
    <div id="form_container">
      <div class="row no-gutters">
        <div class="col-lg-12">
          <div id="wizard_container">
            <div class="row" style="text-align: center">
              <div class="col-md-12">
                <br /><br />
                <h1>Please tell us a bit more about this.</h1>

                <br /><br />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First And Last Name"
                    class="form-control required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    id="email"
                    class="form-control required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    class="form-control required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Location"
                    class="form-control required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Is this apartment owned or leased ?"
                    class="form-control required"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="dob"
                    id="dob"
                    placeholder="Date Of Birth"
                    class="form-control required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="typeofhouse"
                    id="typeofhouse"
                    placeholder="Type Of House"
                    class="form-control required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    placeholder="Gender"
                    class="form-control required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="doyouownapet"
                    id="doyouownapet"
                    placeholder="Do you own a pet"
                    class="form-control required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="wheredoyouwork"
                    id="wheredoyouwork"
                    placeholder="Where do you work"
                    class="form-control required"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <button
                  type="button"
                  name="for"
                  class="forward"
                  @click="clickedNext"
                >
                  Next
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
      name: "PageStep2",
    };
  },
  methods: {
    clickedNext() {
      this.$router.push("/step6");
    },
  },
};
</script>
