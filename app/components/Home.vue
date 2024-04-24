<template>
  <div>
    <div class="kanban">
      <div class="column" v-for="(column, index) in columns" :key="index">
        <h2>{{ column.name }}</h2>
        <draggable
          v-model="column.users"
          class="column-content"
          :group="{ name: 'kanban', put: 'kanban' }"
          @start="onDragStart(index)"
        >
          <div
            class="card-container"
            v-for="(user, userIndex) in column.users"
            :key="userIndex"
          >
            <router-link :to="'/user/' + user.email">
              <div class="card">
                <div>
                  <img
                    class="card-image"
                    :src="user.picture.large"
                    alt="user-photo"
                  />
                </div>

                <div class="card-text">
                  <div>
                    <b>Name :</b> {{ user.name.first }} {{ user.name.last }}
                  </div>
                  <div>
                    <b>Location :</b> {{ user.location.city }},
                    {{ user.location.country }}
                  </div>
                  <div><b>Phone:</b> {{ user.phone }}</div>
                </div>
              </div>
            </router-link>
          </div>
        </draggable>
        <div v-if="column.users.length === 0">Empty(Drag here)</div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      message: "Home Page",
    };
  },
  computed: {
    columns() {
      return this.$store.state.columns;
    },
  },
  components: {
    draggable,
  },
  created() {
    if (this.columns[0].users.length === 0) {
      this.$store.dispatch("fetchUser");
    }
  },
  methods: {
    onDragStart(columnIndex) {
      if (columnIndex === 0 && this.columns[0].users.length === 1) {
        this.generateUser();
      }
    },
    generateUser() {
      this.$store.dispatch("fetchUser");
    },
  },
};
</script>
