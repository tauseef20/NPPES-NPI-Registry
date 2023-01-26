<template>
  <div class="mx-10 my-5">
    <!-- {{ getSearchData }} -->
    <a-row>
      <a-col>
        <h1>Results</h1>
      </a-col>
      <a-divider />
    </a-row>
    <a-row>
      <a-col>
        <p class="resText">
          The following NPI(s) contain information matching your search
          criteria. Please select the NPI to view all the data associated with
          the NPI.
        </p>
      </a-col>
    </a-row>
    <a-row class="pt-2">
      <NuxtLink to="./records">
        <a-col :span="1"> Home </a-col>
      </NuxtLink>
      <a-col :span="2"> / Table View </a-col>
    </a-row>
    <!-- <a-spin tip="Loading..." :delay="delayTime"> -->
    <div class="spin-content">
    <a-row class="pt-4">
      <a-table
        :columns="columns"
        :data-source="getSearchData"
        :pagination="false"
      >
      <a slot="number" slot-scope="obj" @click="detail(obj)">
          <span>
            {{ obj.number }}
          </span>
        </a>
        <a slot="telephone_number" slot-scope="obj">
          <span>
            {{ obj.addresses[0] && obj.addresses[0].telephone_number }}
          </span>
        </a>
        <a slot="address" slot-scope="obj">
          <span>
            {{ obj.addresses[0] && obj.addresses[0].address_1 }}
            {{ obj.addresses[0] && obj.addresses[0].address_2 }} <br />
            {{ obj.addresses[0] && obj.addresses[0].city }}
            {{ obj.addresses[0] && obj.addresses[0].state }}
            {{ obj.addresses[0] && obj.addresses[0].postal_code }}
          </span>
        </a>
        <a slot="taxonomy" slot-scope="obj">
          <span>
            {{ obj.taxonomies[0] && obj.taxonomies[0].desc }}
          </span>
        </a>
        <a slot="name" slot-scope="obj" >
          <span>
            {{ obj.basic && obj.basic.first_name }}
            {{ obj.basic && obj.basic.last_name }}
          </span>
        </a>
      </a-table>
    </a-row> 
    </div>
  <!-- </a-spin> -->
    <a-divider/>
    <a-row type="flex" justify="center" class="py-3">
      <a-col>
        <a-button type="primary" @click="newSearch">
          Start a New Search
        </a-button>
      </a-col>
    </a-row>
    <a-divider/>
  </div>
</template>

<script>
const columns = [
  {
    title: "NPI",
    scopedSlots: { customRender: "number" },
  },
  {
    title: "Name",
    scopedSlots: { customRender: "name" },
    // dataIndex: "age",
    // key: "age",
  },
  {
    title: "NPI Type",
    // dataIndex: "age",
    // key: "age",
  },
  {
    title: "Primary Practice Address",
    scopedSlots: { customRender: "address" },
    // dataIndex: "age",
    // key: "age",
  },
  {
    title: "Phone",
    scopedSlots: { customRender: "telephone_number" },
  },
  {
    title: "Primary Taxonomy",
    scopedSlots: { customRender: "taxonomy" },
    // dataIndex: "age",
    // key: "age",
  },
];
import { mapGetters , mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("modules/records", ["getSearchData"]),
  },
  data() {
    return {
      columns,
    };
  },
  methods: {
    ...mapActions("modules/records", ["detailData"]),
    newSearch() {
      this.$router.push("./records");
    },
    detail(obj){
        this.detailData(obj)
        this.$router.push("./information")
        console.log("This is obj" , obj)
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/global/shortHandClasses.scss";

.resText {
  font-size: 16px;
  color: black;
}
</style>
