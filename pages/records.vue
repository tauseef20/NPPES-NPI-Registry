<template>
  <div class="mx-10 my-5">
    <a-row>
      <a-col>
        <h1>Search NPI Records</h1>
      </a-col>
      <a-divider />
    </a-row>
    <!-- {{ getStateNames }} -->
    <div class="formRecord">
      <a-row class="px-5" :gutter="[10, 10]">
        <a-col :span="8">
          <a-form>
            <a-form-item label="NPI">
              <a-input v-model="form.NPI" type="number" />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="8">
          <a-form>
            <a-form-item label="NPI Type">
              <a-select v-model="form.npiType">
                <a-select-option value>Any</a-select-option>
                <a-select-option value="individual">Individual</a-select-option>
                <a-select-option value="organization"
                  >Organization</a-select-option
                >
              </a-select>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="8">
          <a-form>
            <a-form-item label="Taxonomy Description">
              <a-input v-model="form.description" />
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <a-row class="px-5" :gutter="[10, 10]">
        <a-col :span="8">
          <a-form>
            <a-form-item label="First Name">
              <a-input v-model="form.firstName" />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="8">
          <a-form>
            <a-form-item label="Last Name">
              <a-input v-model="form.lastName" />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="8">
          <a-form>
            <a-form-item
              label="Organization Name (LBN, DBA, Former LBN or Other Name)"
            >
              <a-input v-model="form.orgName" />
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <a-row class="px-5" :gutter="[10, 10]">
        <a-col :span="5">
          <a-form>
            <a-form-item label="City">
              <a-input v-model="form.city" />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="5">
          <a-form-item label="State">
            <a-select v-model="form.state">
              <a-select-option value>Any</a-select-option>
              <a-select-option v-for="state in getStateNames" :key="state">
                {{ state }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="5">
          <a-form-item label="Country">
            <a-select v-model="form.country">
              <a-select-option value>Any</a-select-option>
              <a-select-option v-for="country in getCountries" :key="country">
                {{ country }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form>
            <a-form-item label="Postal Code">
              <a-input v-model="form.code" />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col :span="5">
          <a-form>
            <a-form-item label="Address">
              <a-input v-model="form.address" />
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <div class="text px-5 py-4">
        <p class="Text">
          ** This search page is by default set to return similar and close
          results to your search keywords. You can check the box above if you
          only want the exact matches for your keywords to be returned in the
          search results.
        </p>
      </div>
      <div class="Btns px-5">
        <a-row :gutter="[25, 25]">
          <a-col :span="1">
            <a-button :size="large" @click="clear"> Clear </a-button>
          </a-col>
          <a-col class="pl-5" :span="2">
            <a-button type="primary" @click="onSearch">
              Search
            </a-button>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("modules/records", ["getStateNames", "getCountries"]),
  },
  data() {
    return {
      search:'',
      form: {
        NPI: "",
        npiType: "",
        description: "",
        firstName: "",
        lastName: "",
        orgName: "",
        city: "",
        state: "",
        address: "",
        country: "",
        code: "",
      },
    };
  },
  methods: {
    ...mapActions("modules/records", ["searchData"]),
    clear() {
      this.form = {
        NPI: "",
        npiType: "",
        description: "",
        firstName: "",
        lastName: "",
        orgName: "",
        city: "",
        state: "",
        address: "",
        country: "",
        code: "",
      };
      this.$notification.success({
        message: 'Success:',
        description: 'The form fields have been cleared.'
      });
    },
    onSearch(){
      this.searchData(this.form);
      console.log("This is Search" , this.form)
      this.$router.push("./results")
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.formRecord {
  background: #f5f5f5;
}
.ant-select {
  width: 100%;
}
.ant-form-item-label {
  font-weight: bold;
}
.Text {
  color: #004c9e !important;
  font-size: 18px;
}
// .ant-notification-notice .ant-notification-notice-closable{
//   display: none;
// }
</style>
