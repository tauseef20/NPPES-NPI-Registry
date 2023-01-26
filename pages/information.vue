<template>
  <div class="mx-10 my-5">
    <a-row>
      <a-col>
        <h1>Provider Information</h1>
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
      <NuxtLink to="./results">
        <a-col :span="2">/ Back to Results </a-col>
      </NuxtLink>
      <a-col :span="2"> / NPI View </a-col>
    </a-row>
    <div class="profileData">
      <a-row class="nameData mt-3 ml-3">
        <p>
          {{
            getDetailData[0] &&
            getDetailData[0].other_names[0] &&
            getDetailData[0].other_names[0].prefix
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].basic &&
            getDetailData[0].basic.first_name
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].basic &&
            getDetailData[0].basic.middle_name
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].basic &&
            getDetailData[0].basic.last_name
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].basic &&
            getDetailData[0].basic.credential
          }}
        </p>
      </a-row>
      <a-row class="nameData mt-2 ml-3">
        <a-col>Other Names:</a-col>
      </a-row>
      <a-row class="ml-10 nameData mt-2">
        <p>
          {{
            getDetailData[0] &&
            getDetailData[0].other_names[0] &&
            getDetailData[0].other_names[0].prefix
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].other_names[0] &&
            getDetailData[0].other_names[0].first_name
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].other_names[0] &&
            getDetailData[0].other_names[0].last_name
          }}
          {{
            getDetailData[0] &&
            getDetailData[0].other_names[0] &&
            getDetailData[0].other_names[0].credential
          }}
        </p>
      </a-row>
      <a-row class="nameData mt-2 ml-3">
        <a-col :span="2">Gender:</a-col>
        <a-col :span="3">{{
          getDetailData[0] &&
          getDetailData[0].basic &&
          getDetailData[0].basic.gender
        }}</a-col>
      </a-row>
    </div>
    <a-row class="nameData mt-5">
      <a-col> Details </a-col>
    </a-row>
    <a-row class="mt-3 header py-1">
      <a-col :span="6">Name</a-col>
      <a-col :span="18">Value</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">NPI</a-col>
      <a-col :span="18">{{
        getDetailData[0] && getDetailData[0].number
      }}</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Enumeration Date</a-col>
      <a-col :span="18">{{
        getDetailData[0] &&
        getDetailData[0].basic &&
        getDetailData[0].basic.enumeration_date
      }}</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">NPI Type</a-col>
      <a-col :span="18">{{
        getDetailData[0] && getDetailData[0].enumeration_type
      }}</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Sole Proprietor</a-col>
      <a-col :span="18">{{
        getDetailData[0] &&
        getDetailData[0].basic &&
        getDetailData[0].basic.sole_proprietor
      }}</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Status</a-col>
      <a-col :span="18">{{
        getDetailData[0] &&
        getDetailData[0].basic &&
        getDetailData[0].basic.status
      }}</a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Mailing Address</a-col>
      <a-col :span="18">
        <a-row>
          <a-col>{{
            getDetailData[0] &&
            getDetailData[0].addresses[0] &&
            getDetailData[0].addresses[0].address_1
          }}</a-col>
        </a-row>
        <a-row >
          <a-col>{{
            getDetailData[0] &&
            getDetailData[0].addresses[0] &&
            getDetailData[0].addresses[0].address_2
          }}</a-col>
        </a-row>
        <a-row >
          <p>
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].city
            }}
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].state
            }}
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].postal_code
            }}
          </p>
        </a-row>
        <a-row class="mb-0">
          <a-col>
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].country_name
            }}
          </a-col>
        </a-row>
        <a-row >
          <p>
            Phone:
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].telephone_number
            }}
           |
           Fax:
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[0] &&
              getDetailData[0].addresses[0].fax_number
            }}
          </p>
        </a-row>
        <a-row class="mb-0">
          <a-col>
            <a
              :href="`http://maps.google.com/?q=${getaddress(
                getDetailData[0]
              )}`"
              target="blank"
              >View Map</a
            >
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Primary Practice Address</a-col>
      <a-col :span="18">
        <a-row >
          <a-col>{{
            getDetailData[0] &&
            getDetailData[0].addresses[1] &&
            getDetailData[0].addresses[1].address_1
          }}</a-col>
        </a-row>
        <a-row >
          <a-col>{{
            getDetailData[0] &&
            getDetailData[0].addresses[1] &&
            getDetailData[0].addresses[1].address_2
          }}</a-col>
        </a-row>
        <a-row >
          <p>
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].city
            }}
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].state
            }}
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].postal_code
            }}
          </p>
        </a-row>
        <a-row class="mb-0">
          <a-col>
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].country_name
            }}
          </a-col>
        </a-row>
        <a-row >
          <p>
            Phone:
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].telephone_number
            }}
           |
           Fax:
            {{
              getDetailData[0] &&
              getDetailData[0].addresses[1] &&
              getDetailData[0].addresses[1].fax_number
            }}
          </p>
        </a-row>
        <a-row class="mb-0">
          <a-col>
            <a
              :href="`http://maps.google.com/?q=${getAddress(
                getDetailData[0]
              )}`"
              target="blank"
              >View Map</a
            >
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Health Information Exchange</a-col>
      <a-col :span="18">
        <a-table
          :columns="columns"
          :data-source="getDetailData[0] && getDetailData[0].endpoints"
          :pagination="false"
        >
        </a-table>
      </a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Other Identifiers</a-col>
      <a-col :span="18">
        <a-table
          :columns="column"
          :data-source="getDetailData[0] && getDetailData[0].identifiers"
          :pagination="false"
        >
        </a-table>
      </a-col>
    </a-row>
    <a-row class="mt-2 rowsData py-1">
      <a-col :span="6">Taxonomy</a-col>
      <a-col :span="18">
        <a-table
          :columns="Column"
          :data-source="getDetailData[0] && getDetailData[0].taxonomies"
          :pagination="false"
        >
          <a slot="type" slot-scope="obj">
            <span v-if="obj.primary">Yes</span>
            <span v-else>No</span>
          </a>
          <a slot="select" slot-scope="obj">
            <span> {{ obj.code }} - {{ obj.desc }} </span>
          </a>
        </a-table>
      </a-col>
    </a-row>
    <!-- <a-table :columns="columns" :data-source="getDetailData">
      <a slot="name" slot-scope="obj">
        
          <div>NPI</div>
          <a-divider/>
      
      
          <div>Enumeration Date</div>
          <a-divider/>
        
          <div>NPI Type</div>
          <a-divider/>
        
      </a>
      <a slot="value" slot-scope="obj">
        
          <div>{{ obj.number }}</div>
          <a-divider/>
       
          <div>{{ obj.basic && obj.basic.enumeration_date }}</div>
          <a-divider/>
        
          <div>{{ obj.enumeration_type }}</div>
          <a-divider/>
      
        
        
      </a>
    </a-table> -->
  </div>
</template>

<script>
const columns = [
  {
    title: "Endpoint Type",
    dataIndex: "endpointTypeDescription",
    key: "endpointTypeDescription",
    // scopedSlots: { customRender: "type" },
  },
  {
    title: "Endpoint",
    dataIndex: "endpoint",
    key: "endpoint",
    // scopedSlots: { customRender: "Endpoint" },
    width: 250,
    // dataIndex: "age",
    // key: "age",
  },
  {
    title: "Endpoint Description",
    dataIndex: "endpointDescription",
    key: "endpointDescription",
    // scopedSlots: { customRender: "Description" },
  },
  {
    title: "Use",
    dataIndex: "use",
    key: "use",
    // scopedSlots: { customRender: "use" },
  },
  {
    title: "Content Type",
    dataIndex: "contentOtherDescription",
    key: "contentOtherDescription",
    // scopedSlots: { customRender: "content" },
  },
  {
    title: "Affiliation",
    dataIndex: "affiliation",
    key: "affiliation",
    // scopedSlots: { customRender: "affiliation" },
  },
  {
    title: "Endpoint Location",
    dataIndex: "useDescription",
    key: "useDescription",
    // scopedSlots: { customRender: "location" },
  },
];
const column = [
  {
    title: "Issuer",
    key: "desc",
    dataIndex: "desc",
  },
  {
    title: "State",
    key: "state",
    dataIndex: "state",
  },
  {
    title: "Number",
    key: "identifier",
    dataIndex: "identifier",
  },
];
const Column = [
  {
    title: "Primary Taxonomy",
    scopedSlots: { customRender: "type" },
    // key:"primary",
    // dataIndex:"primary"
  },
  {
    title: "Selected Taxonomy",
    scopedSlots: { customRender: "select" },
    // key:"code",
    // dataIndex:"code"
  },
  {
    title: "State",
    key: "state",
    dataIndex: "state",
  },
  {
    title: "License Number",
    key: "license",
    dataIndex: "license",
  },
];
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("modules/records", ["getDetailData"]),
  },
  watch: {
    getDetailData: {
      immediate: true,
      deep: true,
      handler(val) {
        // debugger
        // if (!val.number) {
        //   this.$router.push("./records")
        // }
      }
    }
  },
  data() {
    return {
      columns,
      column,
      Column,
    };
  },
  mounted(){
    setTimeout(() =>{
      if(this.getDetailData.length == 0) {
        this.$router.push("./records")
      }

    },500)
  },
  methods: {
    getaddress() {
      return (
        this.getDetailData[0] &&
        this.getDetailData[0].addresses[0] &&
        this.getDetailData[0].addresses[0].city &&
        this.getDetailData[0] &&
        this.getDetailData[0].addresses[0] &&
        this.getDetailData[0].addresses[0].address_1
      );
    },
    getAddress() {
      return (
        this.getDetailData[0] &&
        this.getDetailData[0].addresses[1] &&
        this.getDetailData[0].addresses[1].city &&
        this.getDetailData[0] &&
        this.getDetailData[0].addresses[1] &&
        this.getDetailData[0].addresses[1].address_1
      );
    },
  },
};
</script>

<style>
.header {
  font-size: 24px;
  font-weight: bold;
  background: #f8f9fa;
}
.rowsData {
  border: 2px solid #f6f6f7;
  font-size: 18px;
}
.nameData {
  font-size: 24px;
}
.profileData {
  border-left: 10px solid grey;
}
</style>
